In this lecture we will discuss the flex control.

Consider following code inside the export default function Home() {
  return (
      <div className="w-full h-screen bg-red-500">
        <div className="w-24 h-40 bg-yellow-500">Box1</div>
        <div className="w-48 h-40 bg-blue-500">Box2</div>
        <div className="w-72 h-40 bg-green-500">Box3</div>
      </div>
  );
In the above code we have used div . The div is a by default block scope item. It means after ending of a div the next div will start from next line . But of we use the flex it will change the nature of <div> from block to inline. So all divs will be new line

So if we simply change the above code to:
      <div className="w-full h-screen flex items-start justify-center bg-red-500">
        <div className="w-24 h-40 bg-yellow-500">Box1</div>
        <div className="w-48 h-40 bg-blue-500">Box2</div>
        <div className="w-72 h-40 bg-green-500">Box3</div>
      </div>
It will online all the divs in on line as flex changes the block line nature of div to inline

We can vertical align div  items in center , start , end using items-center , items-start  and items-end .To horizental align we use justify-center , justify-start

We can control the direction of flex items in a row and columns using flex-row , flex-col as
      <div className="w-full h-screen flex flex-col items-center justify-center gap-10 bg-red-500">
        <div className="w-24 h-40 bg-yellow-500">Box1</div>
        <div className="w-24 h-40 bg-blue-500">Box2</div>
        <div className="w-24 h-40 bg-green-500">Box3</div>
      </div>
The above code will align the flex items in a column
Note: flex-row-reverse to position flex items horizontally in the opposite direction whereas the flex-col-reverse  to position flex items vertically in the opposite direction:

We can use Gap Utilities for controlling gutters between grid and flexbox items. gap-0, gap-x-0 , gap-y-0

if we have many items and we want then to automatically arrange in the main container according to the available space then we can use the flex-wrap is used if we want to automatically wrap the items inside the main container