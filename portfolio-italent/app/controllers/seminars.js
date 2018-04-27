import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        filterByName(param) {
            if (param !== '') {
                return this.get('store').query('seminar', { name: param }).then((results) => {
                    return { query:param, results: results };
                });
            } else {
                return this.get('store').findAll('seminar').then((results) => {
                    return { query:param, results: results };
                })
            }
        }
    }
});
