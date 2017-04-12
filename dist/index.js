'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _hapi = require('hapi');

var _orders = require('./plugins/orders');

var _orders2 = _interopRequireDefault(_orders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = new _hapi.Server();

var port = process.env.PORT || 4000;

var env = process.env.NODE_ENV || 'development';

server.connection({
    port: port, router: {
        isCaseSensitive: false
    },
    routes: {
        cors: true
    }
});

server.register([require('inert'), require('vision'), require('blipp'), require('tv'), require('hapi-async-handler'),
// require('mongodb'),
{
    register: require('good'),
    options: {
        ops: {
            interval: 5000
        },
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    log: '*',
                    response: '*', request: '*', error: '*'
                }]
            }, {
                module: 'good-console'
            }, 'stdout']
        }
    }
}, {
    register: require('hapi-swagger'),
    options: {
        cors: true,
        jsonEditor: true,
        documentationPath: '/',
        info: {
            title: 'Example',
            version: '1.0.0',
            description: 'An example api'
        }
    }
}, _orders2.default], function (err) {
    if (err) throw err;

    if (env !== 'testing') {
        server.start(function (err) {
            if (err) throw err;
            server.log('info', 'Server running at: ' + server.info.uri);
        });
    }
});

exports.default = server;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzZXJ2ZXIiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJOT0RFX0VOViIsImNvbm5lY3Rpb24iLCJyb3V0ZXIiLCJpc0Nhc2VTZW5zaXRpdmUiLCJyb3V0ZXMiLCJjb3JzIiwicmVnaXN0ZXIiLCJyZXF1aXJlIiwib3B0aW9ucyIsIm9wcyIsImludGVydmFsIiwicmVwb3J0ZXJzIiwiY29uc29sZSIsIm1vZHVsZSIsIm5hbWUiLCJhcmdzIiwibG9nIiwicmVzcG9uc2UiLCJyZXF1ZXN0IiwiZXJyb3IiLCJqc29uRWRpdG9yIiwiZG9jdW1lbnRhdGlvblBhdGgiLCJpbmZvIiwidGl0bGUiLCJ2ZXJzaW9uIiwiZGVzY3JpcHRpb24iLCJlcnIiLCJzdGFydCIsInVyaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUE7Ozs7OztBQUVBLElBQU1BLFNBQVMsa0JBQWY7O0FBRUEsSUFBTUMsT0FBT0MsUUFBUUMsR0FBUixDQUFZQyxJQUFaLElBQW9CLElBQWpDOztBQUVBLElBQU1ELE1BQU1ELFFBQVFDLEdBQVIsQ0FBWUUsUUFBWixJQUF3QixhQUFwQzs7QUFFQUwsT0FBT00sVUFBUCxDQUFrQjtBQUNkTCxjQURjLEVBQ1JNLFFBQVE7QUFDVkMseUJBQWlCO0FBRFAsS0FEQTtBQUlkQyxZQUFRO0FBQ0pDLGNBQU07QUFERjtBQUpNLENBQWxCOztBQVVBVixPQUFPVyxRQUFQLENBQWdCLENBQ1pDLFFBQVEsT0FBUixDQURZLEVBRVpBLFFBQVEsUUFBUixDQUZZLEVBR1pBLFFBQVEsT0FBUixDQUhZLEVBSVpBLFFBQVEsSUFBUixDQUpZLEVBS1pBLFFBQVEsb0JBQVIsQ0FMWTtBQU1aO0FBQ0E7QUFDSUQsY0FBVUMsUUFBUSxNQUFSLENBRGQ7QUFFSUMsYUFBUztBQUNMQyxhQUFLO0FBQ0RDLHNCQUFVO0FBRFQsU0FEQTtBQUlMQyxtQkFBVztBQUNQQyxxQkFBUyxDQUNMO0FBQ0lDLHdCQUFRLGNBRFo7QUFFSUMsc0JBQU0sU0FGVjtBQUdJQyxzQkFBTSxDQUFDO0FBQ0hDLHlCQUFLLEdBREY7QUFFSEMsOEJBQVUsR0FGUCxFQUVZQyxTQUFTLEdBRnJCLEVBRTBCQyxPQUFPO0FBRmpDLGlCQUFEO0FBSFYsYUFESyxFQVNMO0FBQ0lOLHdCQUFRO0FBRFosYUFUSyxFQVdGLFFBWEU7QUFERjtBQUpOO0FBRmIsQ0FQWSxFQStCWjtBQUNJUCxjQUFVQyxRQUFRLGNBQVIsQ0FEZDtBQUVJQyxhQUFTO0FBQ0xILGNBQU0sSUFERDtBQUVMZSxvQkFBWSxJQUZQO0FBR0xDLDJCQUFtQixHQUhkO0FBSUxDLGNBQU07QUFDRkMsbUJBQU8sU0FETDtBQUVGQyxxQkFBUyxPQUZQO0FBR0ZDLHlCQUFhO0FBSFg7QUFKRDtBQUZiLENBL0JZLG1CQUFoQixFQThDRyxlQUFPO0FBQ04sUUFBSUMsR0FBSixFQUFTLE1BQU1BLEdBQU47O0FBRVQsUUFBSTVCLFFBQVEsU0FBWixFQUF1QjtBQUNuQkgsZUFBT2dDLEtBQVAsQ0FBYSxlQUFPO0FBQ2hCLGdCQUFJRCxHQUFKLEVBQVMsTUFBTUEsR0FBTjtBQUNUL0IsbUJBQU9xQixHQUFQLENBQVcsTUFBWCxFQUFtQix3QkFBd0JyQixPQUFPMkIsSUFBUCxDQUFZTSxHQUF2RDtBQUNILFNBSEQ7QUFJSDtBQUVKLENBeEREOztrQkEyRGVqQyxNIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZXJ2ZXJ9IGZyb20gJ2hhcGknO1xuXG5pbXBvcnQgb3JkZXJzIGZyb20gJy4vcGx1Z2lucy9vcmRlcnMnO1xuXG5jb25zdCBzZXJ2ZXIgPSBuZXcgU2VydmVyKCk7XG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDQwMDA7XG5cbmNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7XG5cbnNlcnZlci5jb25uZWN0aW9uKHtcbiAgICBwb3J0LCByb3V0ZXI6IHtcbiAgICAgICAgaXNDYXNlU2Vuc2l0aXZlOiBmYWxzZVxuICAgIH0sXG4gICAgcm91dGVzOiB7XG4gICAgICAgIGNvcnM6IHRydWVcbiAgICB9XG59KTtcblxuXG5zZXJ2ZXIucmVnaXN0ZXIoW1xuICAgIHJlcXVpcmUoJ2luZXJ0JyksXG4gICAgcmVxdWlyZSgndmlzaW9uJyksXG4gICAgcmVxdWlyZSgnYmxpcHAnKSxcbiAgICByZXF1aXJlKCd0dicpLFxuICAgIHJlcXVpcmUoJ2hhcGktYXN5bmMtaGFuZGxlcicpLFxuICAgIC8vIHJlcXVpcmUoJ21vbmdvZGInKSxcbiAgICB7XG4gICAgICAgIHJlZ2lzdGVyOiByZXF1aXJlKCdnb29kJyksXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIG9wczoge1xuICAgICAgICAgICAgICAgIGludGVydmFsOiA1MDAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVwb3J0ZXJzOiB7XG4gICAgICAgICAgICAgICAgY29uc29sZTogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU6ICdnb29kLXNxdWVlemUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1NxdWVlemUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2c6ICcqJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZTogJyonLCByZXF1ZXN0OiAnKicsIGVycm9yOiAnKidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZTogJ2dvb2QtY29uc29sZSdcbiAgICAgICAgICAgICAgICAgICAgfSwgJ3N0ZG91dCddXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG5cbiAgICB7XG4gICAgICAgIHJlZ2lzdGVyOiByZXF1aXJlKCdoYXBpLXN3YWdnZXInKSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgY29yczogdHJ1ZSxcbiAgICAgICAgICAgIGpzb25FZGl0b3I6IHRydWUsXG4gICAgICAgICAgICBkb2N1bWVudGF0aW9uUGF0aDogJy8nLFxuICAgICAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnRXhhbXBsZScsXG4gICAgICAgICAgICAgICAgdmVyc2lvbjogJzEuMC4wJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FuIGV4YW1wbGUgYXBpJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9yZGVyc1xuXSwgZXJyID0+IHtcbiAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG5cbiAgICBpZiAoZW52ICE9PSAndGVzdGluZycpIHtcbiAgICAgICAgc2VydmVyLnN0YXJ0KGVyciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgICAgICBzZXJ2ZXIubG9nKCdpbmZvJywgJ1NlcnZlciBydW5uaW5nIGF0OiAnICsgc2VydmVyLmluZm8udXJpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxuXG5leHBvcnQgZGVmYXVsdCBzZXJ2ZXI7XG4iXX0=