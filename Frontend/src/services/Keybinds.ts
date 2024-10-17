//TODO: Implement key listener and allow components to get a callback for a specific binding
class KeybindService {
  bindings;

  constructor() {
    this.bindings = {};
  }

  init() {
    const handleKeyDown = (event: unknown) => {
      // console.log('Key pressed:', event.key);
      this.handleCustomFind(event);
      this.handleCustomSearch(event);
    };
    window.addEventListener('keydown', handleKeyDown);
  }

  handleCustomFind(event) {
    if (event.ctrlKey && event.key === 'f') {
      event.preventDefault();
      console.log('KEYBIND: Find');
    }
  }

  handleCustomSearch(event) {
    if (event.ctrlKey && event.key === 's') {
      event.preventDefault();
      console.log('KEYBIND: Search');
    }
  }

  destroy() {

  }

  registerBinding() {
  }
}

export const keybindService = new KeybindService();
