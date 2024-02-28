function toDoItem(name, description, priority, year, month, day, hours, minutes, listName) {
  const itemName = name;
  const itemDescription = description;
  const itemPriority = priority;
  const itemDueDate = new Date(year, month, day, hours, minutes); // I must first look how to format using date-fns
  const itemId = `${listName}-${name}`;

  function getName() {
    return itemName;
  }

  function getDescription() {
    return itemDescription;
  }

  function getPriority() {
    return itemPriority;
  }

  function getDueDate() {
    return itemDueDate;
  }
  
  function getItemId() {
    return itemId;
  }

  function getStringRep() {
    let rep = `Task: ${itemName}. Description: ${itemDescription}. Priority: ${itemPriority}. Due date: ${itemDueDate}.`;
    return rep;
  }

  return {
    getName,
    getDescription,
    getPriority,
    getDueDate,
    getItemId,
    getStringRep,
  }
}

export { toDoItem };