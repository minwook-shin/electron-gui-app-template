const {app, BrowserWindow} = require('electron')
app.on("ready",()=>{
    const apps = new BrowserWindow({
        frame:false,
        titleBarStyle: 'hidden',
        title: "gong-po_service",
        show: false
    })
    apps.loadURL(`file://${__dirname}/index.html`)
    apps.once('ready-to-show', () => {
        apps.show()
    })
})