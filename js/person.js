
const personDataLog = (pdlog) => {
pdlog.firstname = pdlog.firstname || 'John';
pdlog.lastname = pdlog.lastname || 'Doe';
pdlog.age = pdlog.age || '33';

return "My name is " + pdlog.firstname + " " + pdlog.lastname + ". I'm " + pdlog.age + " years old."
}

    