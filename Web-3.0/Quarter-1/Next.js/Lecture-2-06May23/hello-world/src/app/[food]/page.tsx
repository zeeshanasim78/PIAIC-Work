export default function Home({params}: {params: {food:any} })
{
    return(
         <>
     <p>I Love {params.food}</p>
    <h2>Why you love {params.food} ?</h2>
        {params.food} is located in Europe. 
    </>);
}