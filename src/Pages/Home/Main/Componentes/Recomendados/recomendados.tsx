import React, { useState } from "react";

import Produto from "./produto";

export default function Recomendados() {
  const [products, setProducts] = useState<any[]>([
    {
      id: "1",
      name: "Panquecas de toucinho",
      description: "Panqueca feita de toucinho muito boa",
      price: 10.99,
      quantity: 1,
      image:
        "https://cdn.discordapp.com/attachments/691792050831622174/964349691422711838/chad-montano-eeqbbemH9-c-unsplash.jpg",
    },
    {
      id: "2",
      name: "Panquecas de toucinho 2",
      description: "Panqueca feita de toucinho muito boa 2",
      price: 20.99,
      quantity: 2,
      image:
        "https://cdn.discordapp.com/attachments/691792050831622174/966798477654896692/eiliv-sonas-aceron-ZuIDLSz3XLg-unsplash.jpg",
    },
    {
      id: "3",
      name: "Panquecas de toucinho 3",
      description: "Panqueca feita de toucinho muito boa 3",
      price: 30.99,
      quantity: 3,
      image:
        "https://cdn.discordapp.com/attachments/691792050831622174/966798701932711946/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg",
    },
    {
      id: "4",
      name: "Panquecas de toucinho 4",
      description: "Panqueca feita de toucinho muito boa 5",
      price: 40.99,
      image:
        "https://cdn.discordapp.com/attachments/691792050831622174/966798962168332289/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg",
    },
    {
      id: "5",
      name: "Panquecas de toucinho 5",
      description: "Panqueca feita de toucinho muito boa 4",
      price: 50.99,
      image:
        "https://cdn.discordapp.com/attachments/691792050831622174/966799270655184926/herson-rodriguez-odouHPr0Lqw-unsplash.jpg",
    },
  ]);

  return (
    <div>
      <div className="m-4 mt-0">
        <h4 className="title-name">Recomendados</h4>
        <div className="produtos">
          {Array.isArray(products) &&
            products.map((item) => {
              return (
                <Produto
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  price={item.price}
                  id={item.id}
                />
              );
            })}
        </div>
        <div className="white-space" />
      </div>
    </div>
  );
}
