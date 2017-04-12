'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.collection = undefined;

var _mongodb = require('mongodb');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/mydb';

var connect = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return _mongodb.MongoClient.connect(mongoUri);

                    case 2:
                        return _context.abrupt('return', _context.sent);

                    case 3:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function connect() {
        return _ref.apply(this, arguments);
    };
}();

exports.default = connect;
var collection = exports.collection = function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(_collection) {
        var db;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return connect();

                    case 2:
                        db = _context2.sent;
                        return _context2.abrupt('return', db.collection(_collection));

                    case 4:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function collection(_x) {
        return _ref2.apply(this, arguments);
    };
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kYi5qcyJdLCJuYW1lcyI6WyJtb25nb1VyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkkiLCJjb25uZWN0IiwiY29sbGVjdGlvbiIsImRiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxXQUFXQyxRQUFRQyxHQUFSLENBQVlDLFNBQVosSUFBeUIsZ0NBQTFDOztBQUVBLElBQU1DO0FBQUEseURBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQWtCLHFCQUFZQSxPQUFaLENBQW9CSixRQUFwQixDQUFsQjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBTjs7a0JBRWVJLE87QUFFUixJQUFNQztBQUFBLDBEQUFhLGtCQUFPQSxXQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQ0xELFNBREs7O0FBQUE7QUFDaEJFLDBCQURnQjtBQUFBLDBEQUVmQSxHQUFHRCxVQUFILENBQWNBLFdBQWQsQ0FGZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFiOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU4iLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XG5cbmNvbnN0IG1vbmdvVXJpID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJJIHx8ICdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L215ZGInO1xuXG5jb25zdCBjb25uZWN0ID0gYXN5bmMgKCkgPT4gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChtb25nb1VyaSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q7XG5cbmV4cG9ydCBjb25zdCBjb2xsZWN0aW9uID0gYXN5bmMgKGNvbGxlY3Rpb24pID0+IHtcbiAgICBjb25zdCBkYiA9IGF3YWl0IGNvbm5lY3QoKTtcbiAgICByZXR1cm4gZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uKTtcbn07XG5cbiJdfQ==