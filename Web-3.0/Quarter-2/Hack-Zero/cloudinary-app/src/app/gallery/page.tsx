import { CloudinaryImage } from "./cloudinary-image";
import UploadButton from "./upload-button";
import cloudinary from "cloudinary";

type SearchResult = {
    public_id : string;
};

export default async function GalleryPage()
{
    const results = await(cloudinary.v2.search
        .expression('resource_type:image')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute()) as { resources: SearchResult[] };

    return (
       <section>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-bold">Gallery</h1>
                    <UploadButton />
                </div>
                <div className="grid grid-cols-5 gap-3">
               
                    {
                        results.resources.map((result) => (
                            <CloudinaryImage
                                key={result.public_id}
                                src={result.public_id}
                                width="200"
                                height="200"
                                alt="An image of something"
                           />
                        ))
                    }
                </div>
                
            </div> 
        </section>
    );
}