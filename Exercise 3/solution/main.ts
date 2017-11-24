//Exercise 3 - Dictionary

class Dictionary<K, V> {
    private _keys : K[] = [];
    private _values: V[] = [];

    public Add(key : K, value : V) : void {
        if(this.ContainsKey(key))
            throw new Error(`Key '${key}' already present in dictionary!`);
            
        this._keys.push(key);
        this._values.push(value);
    }
    
    public Remove(key : K) : void {
        if(!this.ContainsKey(key))
            throw new Error(`Key '${key}' not present in dictionary!`);
        
        let index = this._keys.indexOf(key);
        this._keys.splice(index, 1);
        this._values.splice(index, 1);
    }
    
    public ContainsKey(key : K) : boolean {
        return this._keys.indexOf(key) >= 0;
    }
    
    public Set(key : K, value : V) : void {
        if(!this.ContainsKey(key))
            throw new Error(`Key '${key}' not present in dictionary!`);
        
        let index = this._keys.indexOf(key);
        this._values[index] = value;
    }
    
    public Get(key : K) : V {
        if(!this.ContainsKey(key))
            throw new Error(`Key '${key}' not present in dictionary!`);
        
        let index = this._keys.indexOf(key);
        return this._values[index];
    }

    public toString() : string {
        let contents : string[] = [];

        for(let i = 0; i < this._keys.length; i++) {
            contents.push(`${this._keys[i]}: ${this._values[i]}`);
        }

        return contents.join('\n');
    }

    public ForEach(callback:(KeyValuePair) => void | boolean) : void {
        for(let i = 0; i < this._keys.length; i++) {
            
            let result = callback({
                key: this._keys[i],
                value: this._values[i]
            });

            if(result === false)
                return;
        }
    }
}

interface KeyValuePair<K,V> {
    key : K;
    value : V;
}

let d = new Dictionary<string, number>();
d.Add('foo', 3);
d.Add('bar', 765);
d.Add('baz', 1337);

alert(d.toString());