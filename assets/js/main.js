(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#primary-nav");

  if (header && toggle && nav) {
    const setOpen = (open) => {
      header.classList.toggle("is-nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    };

    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        setOpen(false);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    });
  }

  document.querySelectorAll("[data-member-filter-root]").forEach((root) => {
    const tabs = Array.from(root.querySelectorAll("[data-member-filter-tab]"));
    const panels = Array.from(root.querySelectorAll("[data-member-filter-panel]"));

    if (!tabs.length || !panels.length) {
      return;
    }

    const selectTab = (target) => {
      tabs.forEach((tab) => {
        const active = tab.dataset.memberFilterTab === target;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", String(active));
      });

      panels.forEach((panel) => {
        const active = panel.dataset.memberFilterPanel === target;
        panel.classList.toggle("is-active", active);
        panel.toggleAttribute("hidden", !active);
      });
    };

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        selectTab(tab.dataset.memberFilterTab);
      });
    });

    selectTab("current");
  });
})();
