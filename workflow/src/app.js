import Layer from './components/layer/layer.js'
import './components/css/common.css'
const App = function() {
    var dom = document.getElementById("app");
    var layer = new Layer();
    dom.innerHTML = layer.tpl({
      name:'jessie',
      arr:['a', 'b', 'c']
    });

}
 App()
