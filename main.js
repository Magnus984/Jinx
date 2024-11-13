alert("The jinx extension is up and running")

var images = document.getElementsByTagName('img')

for (image of images){
    image.src = `${browser.runtime.getURL("jinx.jpg")}`
}