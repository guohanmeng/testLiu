"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatepixi_ts_electron_quickstart"]("main_window",{

/***/ "./src/renderer/Views/ViewOne.ts":
/*!***************************************!*\
  !*** ./src/renderer/Views/ViewOne.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.ViewOne = void 0;\r\nvar three_1 = __webpack_require__(/*! three */ \"./node_modules/three/build/three.cjs\");\r\nvar GLTFLoader_js_1 = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\r\nvar BaseView_1 = __webpack_require__(/*! ./BaseView */ \"./src/renderer/Views/BaseView.ts\");\r\nvar uv_grid_opengl_jpg_1 = __importDefault(__webpack_require__(/*! ../assets/textures/uv_grid_opengl.jpg */ \"./src/renderer/assets/textures/uv_grid_opengl.jpg\"));\r\nvar whale_gltf_1 = __importDefault(__webpack_require__(/*! ../assets/models/whale.gltf */ \"./src/renderer/assets/models/whale.gltf\"));\r\nvar ViewOne = /** @class */ (function (_super) {\r\n    __extends(ViewOne, _super);\r\n    function ViewOne(model, renderer) {\r\n        var _this = _super.call(this, model, renderer) || this;\r\n        _this.exampleModel = new three_1.Group();\r\n        _this.exampleTexture = new three_1.Texture();\r\n        _this.group = new three_1.Group();\r\n        _this.scene.add(_this.group);\r\n        var geometryPlane = new three_1.PlaneBufferGeometry(6, 6, 10, 10);\r\n        var materialPlane = new three_1.MeshPhongMaterial({\r\n            color: 0x666666,\r\n            side: three_1.DoubleSide,\r\n            flatShading: true,\r\n        });\r\n        var uniforms = {\r\n            u_time: { type: 'f', value: 1.0 },\r\n            u_resolution: { type: 'v2', value: new three_1.Vector2(800, 800) },\r\n            // u_mouse: { type: 'v2', value: new THREE.Vector2() },\r\n        };\r\n        _this.shaderMat = new three_1.ShaderMaterial({\r\n            uniforms: uniforms,\r\n            vertexShader: model.vertexShader,\r\n            fragmentShader: model.fragmentShader,\r\n            side: three_1.DoubleSide,\r\n        });\r\n        _this.plane = new three_1.Mesh(geometryPlane, materialPlane); //this.shaderMat);\r\n        _this.plane.position.z = -2;\r\n        _this.plane.receiveShadow = true;\r\n        _this.scene.add(_this.plane);\r\n        _this.lightAmbient = new three_1.AmbientLight(0x333333);\r\n        _this.scene.add(_this.lightAmbient);\r\n        _this.lightPoint = new three_1.PointLight(0xffffff);\r\n        _this.lightPoint.position.set(-0.5, 0.5, 4);\r\n        _this.lightPoint.castShadow = true;\r\n        _this.lightPoint.intensity = 0.25;\r\n        _this.scene.add(_this.lightPoint);\r\n        var mapSize = 1024; // Default 512\r\n        var cameraNear = 0.5; // Default 0.5\r\n        var cameraFar = 500; // Default 500\r\n        _this.lightPoint.shadow.mapSize.width = mapSize;\r\n        _this.lightPoint.shadow.mapSize.height = mapSize;\r\n        _this.lightPoint.shadow.camera.near = cameraNear;\r\n        _this.lightPoint.shadow.camera.far = cameraFar;\r\n        var textureMaterial;\r\n        var textureLoader = new three_1.TextureLoader();\r\n        textureLoader.load(uv_grid_opengl_jpg_1.default, function (texture) {\r\n            texture.wrapS = texture.wrapT = three_1.RepeatWrapping;\r\n            texture.anisotropy = _this.renderer.capabilities.getMaxAnisotropy();\r\n            _this.exampleTexture = texture;\r\n            textureMaterial = new three_1.MeshBasicMaterial({ map: texture });\r\n            var modelLoader = new GLTFLoader_js_1.GLTFLoader();\r\n            modelLoader.load(whale_gltf_1.default, function (gltf) {\r\n                _this.exampleModel = gltf.scene;\r\n                // console.log(this.exampleModel);\r\n                _this.exampleModel.scale.set(0.01, 0.01, 0.01);\r\n                _this.exampleModel.position.x = 2;\r\n                _this.group.add(_this.exampleModel);\r\n            });\r\n        }, undefined, function (err) {\r\n            console.log(err);\r\n        });\r\n        return _this;\r\n    }\r\n    ViewOne.prototype.update = function (clock, delta) {\r\n        this.shaderMat.uniforms.u_time.value += delta;\r\n        // group.rotateZ(delta);\r\n        this.group.rotation.set(0, 0, this.model.groupAngle);\r\n        this.group.position.set(this.model.groupX, this.model.groupY, 0);\r\n        var vertArray = this.plane.geometry.attributes.position;\r\n        for (var i = 0; i < vertArray.count; i++) {\r\n            vertArray.setZ(i, Math.sin(clock.getElapsedTime() + i - vertArray.count / 2) * 0.5 + Math.cos(clock.getElapsedTime() - i) * 0.5);\r\n        }\r\n        this.plane.geometry.attributes.position.needsUpdate = true;\r\n        // if (this.exampleModel != undefined) {\r\n        // \tthis.exampleModel.rotateX(0.01);\r\n        // \tthis.exampleModel.rotateY(0.01);\r\n        // }\r\n        if (this.exampleTexture) {\r\n            this.exampleTexture.center.set(0.5, 0.5);\r\n            this.exampleTexture.rotation += clock.getDelta();\r\n        }\r\n    };\r\n    return ViewOne;\r\n}(BaseView_1.BaseView));\r\nexports.ViewOne = ViewOne;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVuZGVyZXIvVmlld3MvVmlld09uZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RkFtQmU7QUFDZixxSkFBc0U7QUFDdEUsMkZBQXNDO0FBRXRDLGtLQUErRDtBQUMvRCxzSUFBbUQ7QUFFbkQ7SUFBNkIsMkJBQVE7SUFhcEMsaUJBQVksS0FBVSxFQUFFLFFBQXVCO1FBQS9DLFlBQ0Msa0JBQU0sS0FBSyxFQUFFLFFBQVEsQ0FBQyxTQTJFdEI7UUF6RUEsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO1FBQ2hDLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxlQUFPLEVBQUUsQ0FBQztRQUNwQyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7UUFDekIsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTNCLElBQU0sYUFBYSxHQUFHLElBQUksMkJBQW1CLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUQsSUFBTSxhQUFhLEdBQUcsSUFBSSx5QkFBaUIsQ0FBQztZQUMzQyxLQUFLLEVBQUUsUUFBUTtZQUNmLElBQUksRUFBRSxrQkFBVTtZQUNoQixXQUFXLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7UUFFSCxJQUFNLFFBQVEsR0FBRztZQUNoQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7WUFDakMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxlQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQzFELHVEQUF1RDtTQUN2RCxDQUFDO1FBRUYsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHNCQUFjLENBQUM7WUFDbkMsUUFBUSxFQUFFLFFBQVE7WUFDbEIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxJQUFJLEVBQUUsa0JBQVU7U0FDaEIsQ0FBQyxDQUFDO1FBRUgsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFlBQUksQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLG9CQUFrQjtRQUNyRSxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0IsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUzQixLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksb0JBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFbEMsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVoQyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxjQUFjO1FBQ3BDLElBQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDLGNBQWM7UUFDdEMsSUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUMsY0FBYztRQUNyQyxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUMvQyxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUNoRCxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztRQUNoRCxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztRQUU5QyxJQUFJLGVBQXlCLENBQUM7UUFFOUIsSUFBSSxhQUFhLEdBQUcsSUFBSSxxQkFBYSxFQUFFO1FBQ3ZDLGFBQWEsQ0FBQyxJQUFJLENBQUMsNEJBQVcsRUFBRSxVQUFDLE9BQU87WUFDdkMsT0FBTyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxHQUFHLHNCQUFjLENBQUM7WUFDL0MsT0FBTyxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBRW5FLEtBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO1lBRTlCLGVBQWUsR0FBRyxJQUFJLHlCQUFpQixDQUFDLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFHMUQsSUFBTSxXQUFXLEdBQUcsSUFBSSwwQkFBVSxFQUFFO1lBQ3BDLFdBQVcsQ0FBQyxJQUFJLENBQUMsb0JBQVMsRUFBRSxVQUFDLElBQUk7Z0JBQ2hDLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDL0Isa0NBQWtDO2dCQUVsQyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDOUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFHakMsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFDLEdBQUc7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7O0lBQ0osQ0FBQztJQUVELHdCQUFNLEdBQU4sVUFBTyxLQUFZLEVBQUUsS0FBYTtRQUVqQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztRQUU5Qyx3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFakUsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUMxRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDakk7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFHM0Qsd0NBQXdDO1FBQ3hDLG9DQUFvQztRQUNwQyxvQ0FBb0M7UUFDcEMsSUFBSTtRQUVKLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqRDtJQUVGLENBQUM7SUFDRixjQUFDO0FBQUQsQ0FBQyxDQXJINEIsbUJBQVEsR0FxSHBDO0FBckhZLDBCQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGl4aS10cy1lbGVjdHJvbi1xdWlja3N0YXJ0Ly4vc3JjL3JlbmRlcmVyL1ZpZXdzL1ZpZXdPbmUudHM/NGUxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRNZXNoLFxuXHRSZW5kZXJlcixcblx0Qm94R2VvbWV0cnksXG5cdE1lc2hQaG9uZ01hdGVyaWFsLFxuXHRBbWJpZW50TGlnaHQsXG5cdFBvaW50TGlnaHQsXG5cdEdyb3VwLFxuXHRNYXRlcmlhbCxcblx0VGV4dHVyZUxvYWRlcixcblx0UmVwZWF0V3JhcHBpbmcsXG5cdFRleHR1cmUsXG5cdE1lc2hCYXNpY01hdGVyaWFsLFxuXHRXZWJHTFJlbmRlcmVyLFxuXHRQbGFuZUJ1ZmZlckdlb21ldHJ5LFxuXHREb3VibGVTaWRlLFxuXHRDbG9jayxcblx0U2hhZGVyTWF0ZXJpYWwsXG5cdFZlY3RvcjJcbn0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMnO1xuaW1wb3J0IHsgQmFzZVZpZXcgfSBmcm9tIFwiLi9CYXNlVmlld1wiO1xuXG5pbXBvcnQgdGV4dHVyZVBhdGggZnJvbSAnLi4vYXNzZXRzL3RleHR1cmVzL3V2X2dyaWRfb3BlbmdsLmpwZydcbmltcG9ydCBtb2RlbFBhdGggZnJvbSAnLi4vYXNzZXRzL21vZGVscy93aGFsZS5nbHRmJ1xuXG5leHBvcnQgY2xhc3MgVmlld09uZSBleHRlbmRzIEJhc2VWaWV3e1xuXG5cdGdyb3VwOiBHcm91cDtcblx0Y3ViZTogTWVzaDtcblx0cGxhbmU6IE1lc2g7XG5cdGV4YW1wbGVNb2RlbDogR3JvdXA7XG5cdGV4YW1wbGVUZXh0dXJlOiBUZXh0dXJlO1xuXG5cdGxpZ2h0QW1iaWVudDogQW1iaWVudExpZ2h0O1xuXHRsaWdodFBvaW50OiBQb2ludExpZ2h0O1xuXG5cdHNoYWRlck1hdDogU2hhZGVyTWF0ZXJpYWw7XG5cblx0Y29uc3RydWN0b3IobW9kZWw6IGFueSwgcmVuZGVyZXI6IFdlYkdMUmVuZGVyZXIpe1xuXHRcdHN1cGVyKG1vZGVsLCByZW5kZXJlcik7XG5cblx0XHR0aGlzLmV4YW1wbGVNb2RlbCA9IG5ldyBHcm91cCgpO1xuXHRcdHRoaXMuZXhhbXBsZVRleHR1cmUgPSBuZXcgVGV4dHVyZSgpO1xuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgR3JvdXAoKTtcblx0XHR0aGlzLnNjZW5lLmFkZCh0aGlzLmdyb3VwKTtcblxuXHRcdGNvbnN0IGdlb21ldHJ5UGxhbmUgPSBuZXcgUGxhbmVCdWZmZXJHZW9tZXRyeSg2LCA2LCAxMCwgMTApO1xuXHRcdGNvbnN0IG1hdGVyaWFsUGxhbmUgPSBuZXcgTWVzaFBob25nTWF0ZXJpYWwoe1xuXHRcdFx0Y29sb3I6IDB4NjY2NjY2LFxuXHRcdFx0c2lkZTogRG91YmxlU2lkZSxcblx0XHRcdGZsYXRTaGFkaW5nOiB0cnVlLFxuXHRcdH0pO1xuXHRcdFxuXHRcdGNvbnN0IHVuaWZvcm1zID0ge1xuXHRcdFx0dV90aW1lOiB7IHR5cGU6ICdmJywgdmFsdWU6IDEuMCB9LFxuXHRcdFx0dV9yZXNvbHV0aW9uOiB7IHR5cGU6ICd2MicsIHZhbHVlOiBuZXcgVmVjdG9yMig4MDAsIDgwMCkgfSxcblx0XHRcdC8vIHVfbW91c2U6IHsgdHlwZTogJ3YyJywgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCkgfSxcblx0XHR9O1xuXHRcblx0XHR0aGlzLnNoYWRlck1hdCA9IG5ldyBTaGFkZXJNYXRlcmlhbCh7XG5cdFx0XHR1bmlmb3JtczogdW5pZm9ybXMsXG5cdFx0XHR2ZXJ0ZXhTaGFkZXI6IG1vZGVsLnZlcnRleFNoYWRlcixcblx0XHRcdGZyYWdtZW50U2hhZGVyOiBtb2RlbC5mcmFnbWVudFNoYWRlcixcblx0XHRcdHNpZGU6IERvdWJsZVNpZGUsXG5cdFx0fSk7XG5cblx0XHR0aGlzLnBsYW5lID0gbmV3IE1lc2goZ2VvbWV0cnlQbGFuZSwgbWF0ZXJpYWxQbGFuZSkvL3RoaXMuc2hhZGVyTWF0KTtcblx0XHR0aGlzLnBsYW5lLnBvc2l0aW9uLnogPSAtMjtcblx0XHR0aGlzLnBsYW5lLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuXHRcdHRoaXMuc2NlbmUuYWRkKHRoaXMucGxhbmUpO1xuXG5cdFx0dGhpcy5saWdodEFtYmllbnQgPSBuZXcgQW1iaWVudExpZ2h0KDB4MzMzMzMzKTtcblx0XHR0aGlzLnNjZW5lLmFkZCh0aGlzLmxpZ2h0QW1iaWVudCk7XG5cblx0XHR0aGlzLmxpZ2h0UG9pbnQgPSBuZXcgUG9pbnRMaWdodCgweGZmZmZmZik7XG5cdFx0dGhpcy5saWdodFBvaW50LnBvc2l0aW9uLnNldCgtMC41LCAwLjUsIDQpO1xuXHRcdHRoaXMubGlnaHRQb2ludC5jYXN0U2hhZG93ID0gdHJ1ZTtcblx0XHR0aGlzLmxpZ2h0UG9pbnQuaW50ZW5zaXR5ID0gMC4yNTtcblx0XHR0aGlzLnNjZW5lLmFkZCh0aGlzLmxpZ2h0UG9pbnQpO1xuXG5cdFx0Y29uc3QgbWFwU2l6ZSA9IDEwMjQ7IC8vIERlZmF1bHQgNTEyXG5cdFx0Y29uc3QgY2FtZXJhTmVhciA9IDAuNTsgLy8gRGVmYXVsdCAwLjVcblx0XHRjb25zdCBjYW1lcmFGYXIgPSA1MDA7IC8vIERlZmF1bHQgNTAwXG5cdFx0dGhpcy5saWdodFBvaW50LnNoYWRvdy5tYXBTaXplLndpZHRoID0gbWFwU2l6ZTtcblx0XHR0aGlzLmxpZ2h0UG9pbnQuc2hhZG93Lm1hcFNpemUuaGVpZ2h0ID0gbWFwU2l6ZTtcblx0XHR0aGlzLmxpZ2h0UG9pbnQuc2hhZG93LmNhbWVyYS5uZWFyID0gY2FtZXJhTmVhcjtcblx0XHR0aGlzLmxpZ2h0UG9pbnQuc2hhZG93LmNhbWVyYS5mYXIgPSBjYW1lcmFGYXI7XG5cblx0XHRsZXQgdGV4dHVyZU1hdGVyaWFsOiBNYXRlcmlhbDtcblx0XHRcblx0XHRsZXQgdGV4dHVyZUxvYWRlciA9IG5ldyBUZXh0dXJlTG9hZGVyKClcblx0XHR0ZXh0dXJlTG9hZGVyLmxvYWQodGV4dHVyZVBhdGgsICh0ZXh0dXJlKSA9PiB7XG5cdFx0XHR0ZXh0dXJlLndyYXBTID0gdGV4dHVyZS53cmFwVCA9IFJlcGVhdFdyYXBwaW5nO1xuXHRcdFx0dGV4dHVyZS5hbmlzb3Ryb3B5ID0gdGhpcy5yZW5kZXJlci5jYXBhYmlsaXRpZXMuZ2V0TWF4QW5pc290cm9weSgpO1xuXG5cdFx0XHR0aGlzLmV4YW1wbGVUZXh0dXJlID0gdGV4dHVyZTtcblxuXHRcdFx0dGV4dHVyZU1hdGVyaWFsID0gbmV3IE1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiB0ZXh0dXJlIH0pO1xuXG5cblx0XHRcdGNvbnN0IG1vZGVsTG9hZGVyID0gbmV3IEdMVEZMb2FkZXIoKVxuXHRcdFx0bW9kZWxMb2FkZXIubG9hZChtb2RlbFBhdGgsIChnbHRmKSA9PiB7XG5cdFx0XHRcdHRoaXMuZXhhbXBsZU1vZGVsID0gZ2x0Zi5zY2VuZTtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy5leGFtcGxlTW9kZWwpO1xuXG5cdFx0XHRcdHRoaXMuZXhhbXBsZU1vZGVsLnNjYWxlLnNldCgwLjAxLCAwLjAxLCAwLjAxKTtcblx0XHRcdFx0dGhpcy5leGFtcGxlTW9kZWwucG9zaXRpb24ueCA9IDI7XG5cblxuXHRcdFx0XHR0aGlzLmdyb3VwLmFkZCh0aGlzLmV4YW1wbGVNb2RlbCk7XG5cdFx0XHR9KTtcblx0XHR9LCB1bmRlZmluZWQsIChlcnIpPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyKVxuXHRcdH0pO1xuXHR9XG5cblx0dXBkYXRlKGNsb2NrOiBDbG9jaywgZGVsdGE6IG51bWJlcik6IHZvaWQge1xuXG5cdFx0dGhpcy5zaGFkZXJNYXQudW5pZm9ybXMudV90aW1lLnZhbHVlICs9IGRlbHRhO1xuXG5cdFx0Ly8gZ3JvdXAucm90YXRlWihkZWx0YSk7XG5cdFx0dGhpcy5ncm91cC5yb3RhdGlvbi5zZXQoMCwgMCwgdGhpcy5tb2RlbC5ncm91cEFuZ2xlKTtcblx0XHR0aGlzLmdyb3VwLnBvc2l0aW9uLnNldCh0aGlzLm1vZGVsLmdyb3VwWCwgdGhpcy5tb2RlbC5ncm91cFksIDApO1xuXG5cdFx0Y29uc3QgdmVydEFycmF5ID0gdGhpcy5wbGFuZS5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdmVydEFycmF5LmNvdW50OyBpKyspIHtcblx0XHRcdHZlcnRBcnJheS5zZXRaKGksIE1hdGguc2luKGNsb2NrLmdldEVsYXBzZWRUaW1lKCkgKyBpIC0gdmVydEFycmF5LmNvdW50IC8gMikgKiAwLjUgKyBNYXRoLmNvcyhjbG9jay5nZXRFbGFwc2VkVGltZSgpIC0gaSkgKiAwLjUpO1xuXHRcdH1cblx0XHR0aGlzLnBsYW5lLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24ubmVlZHNVcGRhdGUgPSB0cnVlO1xuXG5cblx0XHQvLyBpZiAodGhpcy5leGFtcGxlTW9kZWwgIT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gXHR0aGlzLmV4YW1wbGVNb2RlbC5yb3RhdGVYKDAuMDEpO1xuXHRcdC8vIFx0dGhpcy5leGFtcGxlTW9kZWwucm90YXRlWSgwLjAxKTtcblx0XHQvLyB9XG5cblx0XHRpZiAodGhpcy5leGFtcGxlVGV4dHVyZSkge1xuXHRcdFx0dGhpcy5leGFtcGxlVGV4dHVyZS5jZW50ZXIuc2V0KDAuNSwgMC41KTtcblx0XHRcdHRoaXMuZXhhbXBsZVRleHR1cmUucm90YXRpb24gKz0gY2xvY2suZ2V0RGVsdGEoKTtcblx0XHR9XG5cdFx0XG5cdH1cbn1cblxuaW50ZXJmYWNlIGdsdGZNZXNoIGV4dGVuZHMgVEhSRUUuT2JqZWN0M0Q8VEhSRUUuRXZlbnQ+IHtcblx0bWF0ZXJpYWw6IFRIUkVFLk1hdGVyaWFsO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/renderer/Views/ViewOne.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6e03355e4b0d01332ac4")
/******/ })();
/******/ 
/******/ }
);