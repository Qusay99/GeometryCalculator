import {assertEquals} from "https://deno.land/std/testing/asserts.ts";
import {GeometryCalculator} from "./src/calculator.ts";

Deno.test("Rectangle", () => {
    const result = GeometryCalculator.rectangle(4,6)
    assertEquals(result, "Perimeter:\t20.000\tSurface:\t24.000")
});

Deno.test("Square", () => {
    const result = GeometryCalculator.square(5)
    assertEquals(result, "Perimeter:\t20.000\tSurface:\t25.000")
});

Deno.test("Parallelogram", () => {
    const result = GeometryCalculator.parallelogram(4,6,3)
    assertEquals(result, "Perimeter:\t20.000\tSurface:\t12.000")
});

Deno.test("Cuboid", () => {
    const result = GeometryCalculator.cuboid(2,4,5)
    assertEquals(result, "Surface:\t76.000\t Volume: \t40.000");
});

Deno.test("Cube", () => {
    const result = GeometryCalculator.cube(4)
    assertEquals(result, "Surface:\t96.000\t Volume: \t64.000");
});

Deno.test("Cylinder", () => {
    const result = GeometryCalculator.cylinder(3,5)
    assertEquals(result, "Surface:\t150.796\t Volume: \t141.372");
});

Deno.test("Sphere", () => {
    const result = GeometryCalculator.sphere(8)
    assertEquals(result, "Surface:\t804.248\t Volume: \t2144.661");
});