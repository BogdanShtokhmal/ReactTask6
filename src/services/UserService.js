export default class UserService{

    url='http://jsonplaceholder.typicode.com/users';

    user(id){
        return    fetch(this.url+'/'+id).then(value => value.json())

    };



}