var Index;
(function (Index) {
    class IndexViewModel {
        constructor() {
            // if you append this line "export as namespace RxJs;" to the file node_modules/rxjs/index.d.ts it will work
            let subject = new rxjs.Subject();
        }
    }
    Index.IndexViewModel = IndexViewModel;
})(Index || (Index = {}));
//# sourceMappingURL=index.js.map