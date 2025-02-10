import { forwardRef } from "react";
import AccordionItem from "./AccordionItem";

const Pinjaman = forwardRef((props, ref) => {
  const content = (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo deleniti officia quos totam
        delectus, aut animi, itaque ipsa ea perferendis repudiandae nostrum doloremque, sapiente
        eius vero voluptas magnam enim alias?
      </p>
      <ul className="mt-2 list-inside list-disc">
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In ex, voluptatem at sapiente
          amet, illum ratione fugit minus, reiciendis eum consequuntur! Modi autem, culpa sequi
          architecto corporis vero officia. Doloribus?
        </li>
        <li>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis facere velit inventore.
          Natus atque, id, nisi rem corporis sequi veritatis sapiente adipisci praesentium tempore
          distinctio provident expedita odit vitae beatae?
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consequuntur asperiores fuga
          ipsa vitae blanditiis dolorem molestias, quidem praesentium voluptatem commodi dignissimos
          nam harum eligendi esse dolorum quis officia repellendus.
        </li>
      </ul>
    </>
  );

  return <AccordionItem ref={ref} title="Pinjaman" content={content} />;
});

Pinjaman.displayName = "Pinjaman";

export default Pinjaman;