self.onmessage = function(event) {
  let data = event.data;
  self.filterItems(data.stack, data.needle);
};
self.group = function (contacts) {
  const sorted = contacts.sort((a, b) => a.name > b.name ? 1 : -1);

  const grouped = sorted.reduce((groups, contact) => {
    const letter = contact.name.charAt(0);

    groups[letter] = groups[letter] || [];
    groups[letter].push(contact);

    return groups;
  }, {});

  return Object.keys(grouped).map(key => ({key, contacts: grouped[key]}));
}

self.filterItems = function (stack, needle) {
  if (needle && needle.trim() !== '') {
    let filtered = stack.filter(function(item) {
      if(item['name'].toLowerCase().includes(needle.toLowerCase()) || item['phone'].toLowerCase().includes(needle.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
    self.postMessage(self.group(filtered));
  } else {
    self.postMessage(self.group(stack));
  }
}
