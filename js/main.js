// JavaScript source code
function redirect(source) {
    window.location.replace(source);
}

function val(el,prop) {
    return el.attributes[prop].value;
}

function init_catalog() {
    var tiles = $(".tile-wrapper");
    for (var i = 0; i < tiles.length; i++) {
        tiles[i].classList.add("col-xs-12");
        tiles[i].classList.add("col-sm-6");
        tiles[i].classList.add("col-md-4");
        tiles[i].classList.add("col-lg-3");
        tiles[i].innerHTML =
            `<div class="tile">
                <div class="tile-content">
                    <img src="` + val(tiles[i], 'image') + `" alt="` + val(tiles[i], 'name') + `" />
                </div>
                <div class="tile-name">
                    <a data-toggle="modal" data-target="#myModal" onclick="popup_content(this)">` + val(tiles[i], 'name') + `</a>
                </div>
            </div>`;
    }
}

function popup_content(obj) {
    var el = $(obj)["0"].parentElement.parentElement.parentElement;
    $("#popup_name")[0].innerHTML = val(el, "name");
    $("#popup_body")[0].innerHTML = "<center><img src='" + val(el, "image") + "' alt='" + val(el, "image") + "'/></center>" +
        "<p>" + val(el, "descr") + "</p>";
}