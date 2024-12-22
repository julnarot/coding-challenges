export function organizeInventory(inventory) {
    const groupListByProp = (list, property)=>{
        const obj= {};
        list.forEach(element => {
            if(obj.hasOwnProperty(element[property])){
                obj[element[property]] = [...obj[element[property]], element];
            } else {
                obj[element[property]] = [element];
            }
        });
        return obj
    }
    
    const ob= groupListByProp(inventory,'category');
    const res = {};
    Object.keys(ob).forEach(k=>{
        const nameGrouped = groupListByProp(ob[k], 'name');
        const ng = {};
        Object.keys(nameGrouped).forEach(nk=>{
            ng[nk]=nameGrouped[nk].reduce(function (acc, obj) { return acc + obj['quantity']; }, 0)
        })
        res[k]=ng;
    });
    return res
  }