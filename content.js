function insertCompareLink() {
  const containerId = "repo-content-pjax-container";
  const container = document.querySelector(`#${containerId}`);
  if (!container) return;

  const tagElement = container.querySelector(
    `#${containerId} > div span.wb-break-all`
  );

  if (!tagElement) return;

  const latestTag = tagElement.textContent.trim();
  const pathParts = window.location.pathname.split("/");
  const org = pathParts[1];
  const repo = pathParts[2];
  const compareUrl = `https://github.com/${org}/${repo}/compare/${latestTag}...main`;

  const link = document.createElement("a");
  link.href = compareUrl;
  link.textContent = `Compare ${latestTag}...main`;
  link.className = "ml-5 pl-3";

  const firstSection = container.querySelector("section");
  if (firstSection) {
    firstSection.prepend(link);
  }
}

insertCompareLink();
