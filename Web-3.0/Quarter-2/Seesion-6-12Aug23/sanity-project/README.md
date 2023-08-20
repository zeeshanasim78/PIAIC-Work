What is Sanity
Sanity delivers content anywhere (just like a headless CMS).

Beyond that, Sanity gives you total composability. A fully decoupled, real-time content back-end. Entirely customizable content workspaces. Be ready for what's next.

1. # Create a Sanity Project : https://www.sanity.io/docs/create-a-sanity-project
   ===============================================================================================================
   Sanity is a platform for creating and working with structured content. Your content is stored in the cloud and can be distributed anywhere, for example on a website or in an app.

## Step 1: Install Sanity Studio

You start by setting up your content editing environment. It’s called Sanity Studio, and you can configure and customize it with JavaScript. It runs in the browser. To develop locally, we need to run a development server so you can see your changes instantly.

To install Sanity Studio you'll first need to have node and npm installed. To get started, run this in your command line:
npm create sanity@latest -- --template clean --create-project "Sanity Project" --dataset production

This will take you through a setup process by guiding you through the following steps:

👉 Create an account. Select a login provider from the list of options, and confirm with Enter. After creating an account in the browser, come back to the command line window.
👉 Choose an output path. Press Enter to accept the default path, or change it to fit your needs first.
👉 Wait a bit for the installation process to complete. When you get a Success! message, you're good to move on to the next step!! 🎉

Step 2: Run the Studio locally
Having installed the studio in the previous step, it’s time to start it up and run it in your browser!
👉 Enter the Studio's directory:
If you chose a custom output path, remember to change it respectively. e.g: cd sanity-project
👉 Run this command within the Studio's folder: npm run dev

This will build the studio application and start a local development server so you can run the app in your browser. Once the build is complete, you can head over to http://localhost:3333.
You should now see the Sanity Studio running in your browser!. As you modify and save the code, the server will automatically rebuild the studio and refresh the browser. You can stop your development server by pressing Ctrl-C in the terminal where the server is running.

Summary
At this point, we've set up the following:

- Sanity account – you need it to access your projects.
- Sanity project – a place for your content represented as documents, stored by Sanity in the cloud. A single  
  Sanity account can have an unlimited number of Sanity projects.
- Sanity Studio – a React app to edit and publish content. Connected to a Sanity project via APIs. For now, it is
  installed on your computer. In the next steps, we'll cover how to deploy it to the web and share it with others.

2. # Create a schema and configure Sanity Studio :
   # https://www.sanity.io/docs/create-a-schema-and-configure-sanity-studio
   =============================================================================================================

## What is Sanity Studio?

Sanity Studio is an application for creating, editing, and working with content. You can set it up, configure, and customize it with basic JavaScript. You can also extend it using React and a wide selection of helper libraries. While the studio is intentionally engineered to be simple to get started with, it has a lot of advanced functionality out of the box. It’s designed to get out of the way and let you add features as the need arises.

File layout
.
├── README.md
├── node_modules
├── package-lock.json
├── package.json
├── sanity.cli.js
├── sanity.config.js
├── schemas
│ └── index.js
└── static

The schemas folder is where you add your document types and define their fields.

In sanity.config.js you'll find the configuration details for your studio – such as which project and dataset (the collections of documents that make up your content) it should connect to and what plugins should be activated. We'll look more into these concepts later.

## Defining your first document type

Let's build a simple content model for holding a collection of pets, real or not. Sanity Studio will automatically build a user interface from the schema where you describe your content models.

A document type is similar to a “collection” if you’re used to NoSQL/document databases or a table if you know relational databases. In the JSON documents that the Studio writes to, it will appear as a \_type property. It’s very common to use this property to query for your content; for example \*[_type == "pet"].

Let's make a studio that can hold a collection of pets, starting with recording their names. To make your first document type, do the following:

👉 Create a new file inside of the schemas folder and call it pet.js
👉 Open pet.js and add the following code to it
// schemas/pet.js
export default {
name: 'pet',
type: 'document',
title: 'Pet',
fields: [
{
name: 'name',
type: 'string',
title: 'Name'
}
]
}

Let’s unpack what’s happening here:

- export default is how you make the following document type definition available when you later import it to schemas/index.js
- name: 'pet' tells the studio that the JSON gets "\_type": "pet" added to it when you create a new document in the studio (yes, we know, there’s a lot of “type” to keep track of, but bear with us)
- The type: 'document' property tells the studio that it should make it possible to make new pet documents.
- The title: 'Pet' defines what this document type is called in the studio UI. While it's common that title is simply the capitalized form of name, it doesn't have to be.
- For fields you find an array of objects that describes the fields you’ll have available for this document type. In this case, objects with name, type, title in it. Notice how it’s the same keys you have for the document type?
  Inside the fields array, you find one JavaScript object in it with three keys. These describe what the first and only field is and its name. It might take some getting used to, but the value of name is what ends up as the key in the data that the Studio outputs.
  You should also take notice of the type. The value string tells the Studio what kind of input to put here. In this case, it's a single-line text input field. Sanity Studio comes with a lot of built-in field types, including, but not limited to: number, datetime, image, array, and object.

The next step is to import this document type definition into schema.js and add it to the array of types. Open schemas/index.js and do the following:
// schemas/index.js
import pet from './pets'
export const schemaTypes = [pet]

Now, you can save and run the command npm run dev in your command line if you haven’t started it already. Head over to http://localhost:3333. If everything went as it should, you’ll see Pet appearing to the left.

## Step # 3 : Edit and publish content

In the previous step, you set up a document type called pet with one field for its name. With your studio running (npm run dev) and your browser open on http://localhost:3333, you can now click the pencil button (📝) to create a new pet document.

## Editing content

As you can see, the form has just one input field that lets you type text. It could be any pet or whatever you can come up with!

When you’re editing, it activates the synchronization indicator in the bottom left corner of your document pane. This is the studio syncing your changes in real time with the hosted Content Lake. In other words, you’re editing content online, even though your studio is running locally. There’s no need to save!

👉 Go to the three-dotted menu in the upper right corner of the document form. Press it and select Inspect. This opens the JSON inspector, where you can see how the document data looks .

## Publishing a document

Notice how the \_id value starts with drafts.? This means that the document you’re editing is a draft and not available in the public API, that is, you need to be authenticated to access it.

👉 Press the green Publish button, the studio will make a copy of your document, remove the drafts. part of the \_id, and create this document for you in the Content Lake. You will then be able to query it from the web without needing a special token for it.

All changes are recorded and attributed. You can look up a document’s version history by going to the Select version menu, Review changes in the three-dotted menu, or the yellow pencil indicator in the bottom publish bar. The studio will show you what changed and who made the change. It will also allow you to revert to any single change or version.

## Document versions and Review Changes

All changes are recorded and attributed. You can look up a document’s version history by going to the Select version menu, Review changes in the three-dotted menu or the yellow pencil indicator in the bottom publish bar. The studio will show you what changed and who made the change. It will also allow you to revert to any single change or version.

If you make an edit in the name field again, this will create a new drafts. document. When you’re ready to go live with your changes, you can press Publish. This will overwrite the already published document with your new changes. That’s it

## Step # 4 : Connect your content

Assuming you've followed along with the previous steps of configuring the schema and editing content, you should be all set up for the next step of bringing your content to the world.

Since your content is just data available through an API, there’s practically no limit to where you can put it! It doesn’t even have to be the Web, as long as the system can send an HTTP request and do something with the returned JSON data. Of course, you can use Sanity with frameworks like Next.js, Nuxt.js, SvelteKit, Gatsby, Scully; you name it.

## Connect your content to Next.js

Assuming you've followed along with the previous steps of configuring schema and editing content, you should be all set up for the next step of bringing your content to the world. Since your content is ultimately just data available through APIs, there’s practically no limit to where you can put it! It doesn’t even have to be the Web, as long as the system can send an HTTP request and do something with the returned JSON data.

In this guide, you will add the necessary code to a Next.js starter to pull in your content from your Sanity Content Lake. Below, you’ll find a simple boilerplate as an embedded CodeSandbox project. If you open it in a new window and start editing, it will fork and be tied to your account if you log in. You can also download the code and run it locally, or import it to your GitHub account. To see the finished code, check out the CodeSandbox embed at the end of this guide.
