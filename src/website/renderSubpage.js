export function renderSubpage(subpageObj) {
  const subpage = document.getElementById("subpage");
  subpage.innerHTML = "";
  subpage.appendChild(subpageObj.createSubpage());
}
