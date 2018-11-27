const {app, BrowserWindow} = require('electron')
app.on("ready",()=>{
    const apps = new BrowserWindow({
        frame:false,
        titleBarStyle: 'hidden',
        title: "electron gui app template",
        show: false
    })
    apps.loadURL(`file://${__dirname}/index.html`)
    apps.once('ready-to-show', () => {
        apps.show()
    })
})