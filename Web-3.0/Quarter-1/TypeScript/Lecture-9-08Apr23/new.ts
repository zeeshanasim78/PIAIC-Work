let indian: {bemani:number,technical_skill:number} = {bemani:5, technical_skill:6};
// Note: When we declare object it is a fresh object
// But when we assign a value to the object it will become stale object

let pakistani: {bemani:number,technical_skill:number,seat_steal:number} = {bemani:5, technical_skill:6,seat_steal:10};

indian = pakistani; // This is ok. Will not generate error as pakistani is a steal pbject 

//pakistani = indian;  // This will generate error as inidan has two properties and pakistani has three types

// This will generate error as we as assigning new object to a variable
//indian = {bemani:5, technical_skill:6,seat_steal:10};

// So Rule is : In Fresh Object Additional Property is not allowed
// But in case of the Steal Object Additional Property is allowed

