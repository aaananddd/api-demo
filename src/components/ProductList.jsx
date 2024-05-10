import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProductList = () => {
  return (
    <div className="flex  justify-center p-6">
      <Card className="flex flex-col shadow-md w-96">
        <CardHeader>
          <CardTitle>
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
          </CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <h2 className="font-bold">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button className="bg-indigo-600 rounded-3xl  text-white">
            Buy Now!
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductList;
