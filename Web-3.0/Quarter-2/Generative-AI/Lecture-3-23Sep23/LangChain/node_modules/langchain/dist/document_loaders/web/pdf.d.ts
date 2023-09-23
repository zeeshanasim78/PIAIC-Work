import { Document } from "../../document.js";
import { BaseDocumentLoader } from "../base.js";
/**
 * A document loader for loading data from PDFs.
 */
export declare class WebPDFLoader extends BaseDocumentLoader {
    protected blob: Blob;
    protected splitPages: boolean;
    constructor(blob: Blob, { splitPages }?: {
        splitPages?: boolean | undefined;
    });
    /**
     * Loads the contents of the PDF as documents.
     * @returns An array of Documents representing the retrieved data.
     */
    load(): Promise<Document[]>;
}
