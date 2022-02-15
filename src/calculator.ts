export class GeometryCalculator{
    public static availableMethods(obj: any){
        return Object.getOwnPropertyNames(obj).filter(function(property) {
            return typeof obj[property] == "function";
        });
    }
    public static rectangle(a: number, b: number){
        let perimeter = 2*(a+b);
        let surface = a*b;
        let result: string = "Perimeter:\t" + perimeter + "\tSurface:\t" + surface;

        return result
    }
    public static square(a: number){
        let perimeter = 4*a;
        let surface = Math.pow(a,2);
        let result: string = "Perimeter:\t" + perimeter + "\tSurface:\t" + surface;

        return result
    }
    public static parallelogram(a: number, b: number, h: number){
        let perimeter = 2*(a+b);
        let surface = a*h;
        let result: string = "Perimeter:\t" + perimeter + "\tSurface:\t" + surface;

        return result
    }
    public static cube(a: number){   
        let surface = 6*(Math.pow(a,2));
        let volume = Math.pow(a,3);

        let result: string = "Surface:\t" + surface + "\t Volume: \t" + volume;

        return result
    }
    public static cuboid(a: number, b: number, c: number){
        let surface = 2*((a*b)+(a*c)+(b*c));
        let volume = a*b*c;

        let result: string = "Surface:\t" + surface + "\t Volume: \t" + volume;

        return result
    }
    public static cylinder(r: number, h: number){
        let surface = 2*Math.PI*r*(r+h);
        let volume = Math.PI*(r**2)*h;

        let result: string = "Surface:\t" + surface + "\t Volume: \t" + volume;

        return result
    }
    public static sphere(r: number){
        let surface = 4*Math.PI*r;
        let volume = (4/3)*Math.PI*(r**2);

        let result: string = "Surface:\t" + surface + "\t Volume: \t" + volume;

        return result
    }
}