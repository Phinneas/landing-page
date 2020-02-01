// const windowGlobal = typeof window !== "undefined" && window;

class WindowShim {
  open(url: string) {
    // (windowGlobal as Window).open(url);
  }
  scrollToBottom() {
    // setTimeout(() => {
    //   (windowGlobal as Window).scrollTo({
    //     left: 0,
    //     top: document.body.scrollHeight,
    //     behavior: "smooth"
    //   });
    // }, 200);
  }
}

export const windowShim = new WindowShim();
