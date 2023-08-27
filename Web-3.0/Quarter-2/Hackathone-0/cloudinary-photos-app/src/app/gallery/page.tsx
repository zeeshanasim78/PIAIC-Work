import UploadButton from "./upload-button";
import cloudinary from "cloudinary";

export default async function GalleryPage() {
    
    type SearchResult = {
        public_id: string;
    }
    const results = await cloudinary.v2.search
        .expression('resource_type:image')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute() as {resources : SearchResult[]};
    
    return (
       <section>
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold">Gallery</h1>
             <UploadButton/>
                {results.map(result => {
                    <div>

                    </div>
                }   
            }
            </div> 
        </section>
    )
}