//Exercise 3 - Dictionary
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this._keys = [];
        this._values = [];
    }
    Dictionary.prototype.Add = function (key, value) {
        if (this.ContainsKey(key))
            throw new Error("Key '" + key + "' already present in dictionary!");
        this._keys.push(key);
        this._values.push(value);
    };
    Dictionary.prototype.Remove = function (key) {
        if (!this.ContainsKey(key))
            throw new Error("Key '" + key + "' not present in dictionary!");
        var index = this._keys.indexOf(key);
        this._keys.slice(index, 1);
        this._values.slice(index, 1);
    };
    Dictionary.prototype.ContainsKey = function (key) {
        return this._keys.indexOf(key) >= 0;
    };
    Dictionary.prototype.Set = function (key, value) {
        if (!this.ContainsKey(key))
            throw new Error("Key '" + key + "' not present in dictionary!");
        var index = this._keys.indexOf(key);
        this._values[index] = value;
    };
    Dictionary.prototype.Get = function (key) {
        if (!this.ContainsKey(key))
            throw new Error("Key '" + key + "' not present in dictionary!");
        var index = this._keys.indexOf(key);
        return this._values[index];
    };
    Dictionary.prototype.toString = function () {
        var contents = [];
        for (var i = 0; i < this._keys.length; i++) {
            contents.push(this._keys[i] + ": " + this._values[i]);
        }
        return contents.join('\n');
    };
    Dictionary.prototype.ForEach = function (callback) {
        for (var i = 0; i < this._keys.length; i++) {
            var result = callback({
                key: this._keys[i],
                value: this._values[i]
            });
            if (result === false)
                return;
        }
    };
    return Dictionary;
}());
var d = new Dictionary();
d.Add('foo', 3);
d.Add('bar', 765);
d.Add('baz', 1337);
alert(d.toString());
