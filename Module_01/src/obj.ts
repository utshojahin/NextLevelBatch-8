//* Object type, type alias and interface

type Address = {
  streetName: string;
  holdingNumber: number;
};

type TUser = {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badges: string[];
  address: Address;
};

interface IUser {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badges: string[];
}

const user: TUser = {
  name: "Mir",
  age: 123,
  isActive: true,
  action: () => console.log("Hello"),
  badges: ["abc", "def"],
  address: {
    holdingNumber: 123,
    streetName: "ABC",
  },
};
const user2:TUser={
    name:"Jahin",
    age:20,
    isActive:false,
    action:()=>console.log("Hello"),
    badges: ["abc", "def"],
  address: {
    holdingNumber: 123,
    streetName: "ABC",
  },
}