"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebPDFLoader = void 0;
const pdf_js_1 = require("pdf-parse/lib/pdf.js/v1.10.100/build/pdf.js");
const document_js_1 = require("../../document.cjs");
const base_js_1 = require("../base.cjs");
/**
 * A document loader for loading data from PDFs.
 */
class WebPDFLoader extends base_js_1.BaseDocumentLoader {
    constructor(blob, { splitPages = true } = {}) {
        super();
        Object.defineProperty(this, "blob", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "splitPages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        this.blob = blob;
        this.splitPages = splitPages ?? this.splitPages;
    }
    /**
     * Loads the contents of the PDF as documents.
     * @returns An array of Documents representing the retrieved data.
     */
    async load() {
        const parsedPdf = await (0, pdf_js_1.getDocument)({
            data: new Uint8Array(await this.blob.arrayBuffer()),
            useWorkerFetch: false,
            isEvalSupported: false,
            useSystemFonts: true,
        }).promise;
        const meta = await parsedPdf.getMetadata().catch(() => null);
        const documents = [];
        for (let i = 1; i <= parsedPdf.numPages; i += 1) {
            const page = await parsedPdf.getPage(i);
            const content = await page.getTextContent();
            if (content.items.length === 0) {
                continue;
            }
            const text = content.items
                .map((item) => item.str)
                .join("\n");
            documents.push(new document_js_1.Document({
                pageContent: text,
                metadata: {
                    pdf: {
                        version: pdf_js_1.version,
                        info: meta?.info,
                        metadata: meta?.metadata,
                        totalPages: parsedPdf.numPages,
                    },
                    loc: {
                        pageNumber: i,
                    },
                },
            }));
        }
        if (this.splitPages) {
            return documents;
        }
        if (documents.length === 0) {
            return [];
        }
        return [
            new document_js_1.Document({
                pageContent: documents.map((doc) => doc.pageContent).join("\n\n"),
                metadata: {
                    pdf: {
                        version: pdf_js_1.version,
                        info: meta?.info,
                        metadata: meta?.metadata,
                        totalPages: parsedPdf.numPages,
                    },
                },
            }),
        ];
        return documents;
    }
}
exports.WebPDFLoader = WebPDFLoader;
