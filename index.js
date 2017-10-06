const {app, BrowserWindow} = require('electron')
app.on("ready",()=>{
    console.log('ready')
    const apps = new BrowserWindow({
        frame:false,
        titleBarStyle: 'hidden',
        title: "gong-po_service"
    })
    apps.loadURL(`file://${__dirname}/index.html`)
})