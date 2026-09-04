(() => {
  const rail = document.getElementById("zm-rail");
  if (!rail) return;

  const links = Array.from(rail.querySelectorAll("[data-rail]"));
  const targets = links
    .map((a) => document.getElementById(a.getAttribute("data-rail")))
    .filter(Boolean);

  const mark = (id) => {
    links.forEach((a) => {
      a.classList.toggle("is-active", a.getAttribute("data-rail") === id);
    });
  };

  const spy = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible.length) mark(visible[0].target.id);
    },
    { rootMargin: "-96px 0px -55% 0px", threshold: 0 }
  );

  targets.forEach((el) => spy.observe(el));
})();
