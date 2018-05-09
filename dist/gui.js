// GUI
var canInteract = false
var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
advancedTexture.renderAtIdealSize = true;

var GUIControl = function() {
    this.switcher = BABYLON.GUI.Button.CreateSimpleButton("but1", "close");
    this.switcher.width = 0.2;
    this.switcher.height = "40px";
    this.switcher.color = "white";
    this.switcher.cornerRadius = 5;
    //  this.switcher.background = "#5f9ea0";
    this.switcher.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    this.switcher.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    advancedTexture.addControl(this.switcher);
    //  return this.switcher  
}

GUIControl.prototype.switch = function(button) {
    var switchbutton = this.switcher;
    button.alpha = 0
    switchbutton.onPointerDownObservable.add(function() {
        // switchbutton.color = "brown";
        switchbutton.alpha = 1.
        canvas.style.cursor = "pointer";
        if (canInteract === false) {
            canInteract = true
            switchbutton.children[0].text = "close";
            button.isVisible = true
        } else {
            canInteract = false
            button.isVisible = false
            switchbutton.children[0].text = "open";
        }
        //alert("yoo")
    });
    return switchbutton
}

var switcher = new GUIControl()


var GUInterface = function(num, horizontal, containerheight, zindex) {
    this.buttons = []
    this.zindex = zindex
    this.containerheight = containerheight || 1.6
    var background = new BABYLON.GUI.Rectangle();
    var pseudobackground = new BABYLON.GUI.Rectangle();
    pseudobackground.zIndex = this.zindex;
    background.zIndex = this.zindex;
    this.background = background
    for (var i = 0; i < num; i++) {
        var button1 = BABYLON.GUI.Button.CreateSimpleButton("but1", "");
        button1.width = "70px"
        button1.height = "60px";
        if (horizontal) {
            button1.left = 308 * (i / 3) - 250;
            button1.top = 200;
            advancedTexture.addControl(button1);

            var button = BABYLON.GUI.Button.CreateImageWithCenterTextButton("but", "#" + i, "textures/palm.png");
            button.width = "60px"
            button.height = "40px";
            button.color = null;
            button.background = null;
            button.thickness = 0;
            button1.addControl(button);

        } else {


            button1.width = "70px"
            button1.alpha = 0
            button1.height = "30px";
            button1.top = 100 * (i / 3) - 250;
            button1.left = -20
            button1.color = "white";
            button1.cornerRadius = 5;
            button1.background = "#5f9ea0";
            button1.indexnum = 3
            button1.children[0].left = -300
            if (num <= 8) {
                background.width = .6
                background.height = .29 * (num / 1.);
                background.color = "#5f9ea0";
                background.scaleY = 0.7;
                background.thickness = 2;
                background.cornerRadius = 5;
                background.background = "silver";
                background.top = -100
                background.alpha = 0.1


                pseudobackground.width = "780px"
                pseudobackground.height = .29 * (num / 1.);
                pseudobackground.color = "#5f9ea0";
                pseudobackground.scaleY = 0.7;
                pseudobackground.thickness = 2;
                pseudobackground.cornerRadius = 5;
                pseudobackground.background = "green";
                pseudobackground.top = -100
                pseudobackground.alpha = 0.1

            } else {
                background.width = .6
                background.height = .092 * (num / 1.);
                background.color = "#5f9ea0";
                background.scaleY = 0.7;
                background.thickness = 2;
                background.cornerRadius = 5;
                background.background = "silver";
                background.top = -100
                background.alpha = 0.1



                pseudobackground.width = "780px"
                pseudobackground.height = .092 * (num / 1.);
                pseudobackground.color = "#5f9ea0";
                pseudobackground.scaleY = 0.7;
                pseudobackground.thickness = 2;
                pseudobackground.cornerRadius = 5;
                pseudobackground.background = "green";
                pseudobackground.top = -100
                pseudobackground.alpha = 0.1
            }

            this.buttons.push(button1)
            //background.zIndex = -1
            this.background.addControl(button1);
            this.background.addControl(pseudobackground);


        }
        button1.color = "white";
        button1.cornerRadius = 5;
        button1.background = "#5f9ea0";
        button1.indexnum = 3
        this.buttons.push(button1);

        advancedTexture.addControl(this.background);

    }




}
var GUIWindow = function() {
    var background = new BABYLON.GUI.Rectangle();
    background.width = .6
    background.height = .8;
    background.color = "#5f9ea0";
    background.scaleY = 0.7;
    background.thickness = 2;
    background.cornerRadius = 5;
    background.background = "silver";
    background.top = -100
    background.alpha = 1
    this.window = background
    advancedTexture.addControl(this.window);

    //grid of options
    var board = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]
    for (var y = 0; y < board.length; y++) {
        for (var x = 0; x < board[y].length; x++) {
            //Draw a wall
            if (board[y][x] === 1) {
                var button1 = new BABYLON.GUI.Button.CreateImageButton("but", "Click Me", null);
                button1.width = "80px"
                button1.height = "60px";
                button1.left = x * 102 - 100;
                button1.top = y * 102 - 200;
                button1.color = "white";
                button1.cornerRadius = 5;
                button1.background = "silver";

                this.window.addControl(button1);

            }
        }
    }
    return this.window
}



GUInterface.prototype.switch = function() {
    var background = this.background
    background.isVisible = false
    switcher.switch(background)


}
GUInterface.prototype.clear = function() {
    this.index = 0
    this.event = null || event;
    for (var i = 0; i < this.buttons.length; i++) {
        if (i == this.index) {
            var bts = this.buttons[i];

            this.buttons[i].isVisible = false
            return this.buttons[i];
        }
    }
}



GUInterface.prototype.select = function(index, text, event) {
    this.text = text || "click me";
    this.index = index || 0

    for (var i = 0; i < this.buttons.length; i++) {
        if (i == this.index) {
            this.event = null || event;
            var bts = this.buttons[i];
            this.buttons[i].background = "lime";
            this.buttons[i].children[0].text = this.text;
            //call event for this button
            this.buttons[i].onPointerDownObservable.add(function() {
                event()
            })
            return this.buttons[i];
        }
    }
}

GUInterface.prototype.action = function(button, event) {
    button.onPointerDownObservable.add(function() {
        event()
    })
}

GUInterface.prototype.interact = function(event) {
    this.buttons.forEach(function(element) {
        element.alpha = 0.3

        var surge = .3
        element.onPointerEnterObservable.add(function() {
            element.color = "#40e0d0";
            element.alpha = 1.
            canvas.style.cursor = "pointer";
            surge -= .05

        });
        element.onPointerOutObservable.add(function() {
            element.color = "white";
            element.alpha = .3
        });
        return {
            element
        };
    });
}

GUInterface.prototype.selectAll = function() {
    for (var i = 0; i < this.buttons.length; i++) {
        this.buttons[i].background = "blue";
        return this.buttons[i];
    }
}
