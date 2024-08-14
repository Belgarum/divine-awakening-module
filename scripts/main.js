// Register the Pantheon Dynamics Sheet
Hooks.once('init', function() {
    console.log('Divine Awakening | Initializing Pantheon Dynamics Sheet');
    
    // Register custom character sheet
    Actors.registerSheet("core", PantheonDynamicsSheet, { makeDefault: true });
  
    // Additional initialization code can go here
  });
  
  class PantheonDynamicsSheet extends ActorSheet {
    static get defaultOptions() {
      return mergeObject(super.defaultOptions, {
        classes: ["divine-awakening", "sheet", "pantheon-dynamics"],
        template: "templates/pantheon-dynamics-sheet.html",
        width: 600,
        height: 600,
        tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "attributes" }]
      });
    }
  
    activateListeners(html) {
      super.activateListeners(html);
  
      // Update displayed value for range inputs
      html.find('input[type="range"]').on('input', function(event) {
        const input = $(event.currentTarget);
        const value = input.val();
        input.next('span').text(value);
      });
  
      // Add any additional event listeners or functionality here
    }
  }
  