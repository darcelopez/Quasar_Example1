# Quasar_Example1
Example of how to use Quasar v.2x with Vue3 and Vuex

Instructions from: Danny Connell

Step 1. (Optional) Install the Global CLI
$ npm install -g @quasar/cli

Step 2. Start developing
$ npm init quasar

    .Select "App with Quasar CLI, let's go!"
    .Create your project folder name
    .Select "Quasar v2 (Vue 3 | latest and greatest)"
    .Select "Javascript"
    .Select "Quasar App CLI with Webpack"
    .Provide package name, project product name, project description and author
    .Select "Sass with SCSS syntax"
    .Enable "State Management (Vuex) [DEPRECATED by Vue Team]" and disable the rest
    .Select "Yes, use npm"

Setp 3. Run de project
$ cd project-folder
$ quasar dev 

# Once finish development
Can Build the app for production

$ quasar build


# Using Electron (Export Mac app)
In order to develop/build a Quasar Electron app, we need to add the Electron mode to our Quasar project. Run the following:
$ quasar mode add electron

To start developing with Electron execute following command:
$ quasar dev -m electron

When "Command name was not available. Please run again." shows at the command window, just delete node_modules folder and execute command
$ npm install

...then execute again
$ quasar dev -m electron


To export the Windows app execute the following command"
$ quasar build -m electron

You may find the Mac application in the folder dist/electron/QuasarApp-darwin-x64



# Using Electron (Export Windows app)
Execute the following code (same as the one to get the mac app)

$ quasar build -m electron

You may find the Mac application in the folder dist/electron/Quasar App-win32-x64

Aditional requirements if need to test oh a Mac computer (optional)
.Virtual Box
.Windows Development Image for VirtualBox
