var po = org.polymaps;

var map = po.map()
    .container(document.getElementById("map").appendChild(po.svg("svg")))
    .center({lat: 36.9741171, lon: -122.0307963})
    .zoom(12)
    .add(po.interact())
    .add(po.hash());

map.add(po.image()
    .url(po.url("http://{S}tile.cloudmade.com"
    + "/1a193057ca6040fca68c4ae162bec2da" // http://cloudmade.com/register
    + "/998/256/{Z}/{X}/{Y}.png")
    .hosts(["a.", "b.", "c.", ""])));

map.add(po.compass()
    .pan("none"));