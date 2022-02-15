import {assertEquals} from "https://deno.land/std/testing/asserts.ts";
import {GeometryCalculator} from "./src/calculator.ts";

Deno.test("Rectangle", () => {
    const result = GeometryCalculator.rectangle(4,6)
    // assertEquals(result, "Surface:\t96\t Volume: \t64");
});

Deno.test("Square", () => {
    const result = GeometryCalculator.square(4)
    // assertEquals(result, "Surface:\t96\t Volume: \t64");
});

Deno.test("Parallelogram", () => {
    const result = GeometryCalculator.parallelogram(4,6,5)
    // assertEquals(result, "Surface:\t96\t Volume: \t64");
});

Deno.test("Cuboid", () => {
    const result = GeometryCalculator.cuboid(4)
    // assertEquals(result, "Surface:\t96\t Volume: \t64");
});

Deno.test("Cube", () => {
    const result = GeometryCalculator.cube(4)
    assertEquals(result, "Surface:\t96\t Volume: \t64");
});

Deno.test("Cylinder", () => {
    const result = GeometryCalculator.cylinder(4)
    // assertEquals(result, "Surface:\t96\t Volume: \t64");
});

Deno.test("Sphere", () => {
    const result = GeometryCalculator.sphere(4)
    // assertEquals(result, "Surface:\t96\t Volume: \t64");
});