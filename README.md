Toaster Primereact CRA Typescript
=================================

Example of using React Context for spreading Toast ([Primereact Toast](https://primefaces.org/primereact/showcase/#/toast)) showMessage functionality
down the DOM tree

Spawned using [Create React App](./CRA.README.md)

## Usage

1) Wrap root application node in Toaster tag
```
import Toaster from "./components/Toaster/Toaster";

const App = () => {
    return (
        <Toaster>
            <div className="App">
                ...
            </div>
        </Toaster>
    );
}
```

2) Add Context.Consumer to inner component

```
    const {showToast} = useContext(ToasterContext)

```

3) Use showToast function to show Toast

```
showToast("warn", "Warning!")
```
