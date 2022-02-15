# Geometry Calculator
This is a module that can calculate the perimeter, surface or even the volume of certain geometric shapes. It can either be used alone or integrated into other projects (e.g. math web application)

## How to use this module
Firstly, you have to import the module using:
```ts
import {GeometryCalculator} from 'https://deno.land/x/geometry_calculator@v1.0.1/mod.ts'
```
#### **Please make sure that you are importing the right version/release of the module!**

Then you can use the following command to see which methods recpectivly geometric shapes are considerd in the module yet.
```ts
console.log(GeometryCalculator.availableMethods(GeometryCalculator));
```
#### Please pay attention to the required number of arguments to avoid getting error messages!

## Usage Example
### 1. Calculate the perimeter and the surface of a rechtangle:

```ts
console.log(GeometryCalculator.rectangle(5,4));
```
##### Output:
```
Perimeter:      18      Surface:        20
```

### 2. Calculate the surface and the volume of a cuboid:

```ts
console.log(GeometryCalculator.cuboid(6,3,5));
```
##### Output:
```
Surface:        126      Volume:        90
```
