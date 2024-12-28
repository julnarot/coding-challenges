export function findInAgenda(agenda, phone) {
    const phonePattern = /\+\d{1,2}-\d{3}-\d{3}-\d{3}/ // reducir de 3 a 2 caracters
    const namePatter = /</;
    const contacts = agenda.replace(/(\n)/gm, "").split('>')
        .map(m => {
            const hasNumber = phonePattern.test(m);
            const hasName = namePatter.test(m);
            if (hasNumber) {
                m = m.replace(phonePattern, `${m.match(phonePattern)[0]}<`)
            } if (!hasNumber) {
                m = `<${m}`
            } if (!hasName) {
                m = `${m}<`
            }
            const [phone, address, name] = m.split('<')
            return { name, phone, address };


        })
        .filter(f => !!f.phone && f.phone.includes(phone));
    if (contacts.length === 1) {
        const contact = contacts[0];
        return contact && Object.keys(contact).length ?
            {
                name: contact.name,
                address: contact.address ? contact.address.trim() : null
            }
            : null
    }
    return null;
}
