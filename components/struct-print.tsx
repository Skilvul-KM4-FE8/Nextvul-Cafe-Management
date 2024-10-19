import { forwardRef } from "react";

type StructPrintProps = {};

// Forward ref for the component
export const StructPrint = forwardRef<HTMLDivElement, StructPrintProps>((props, ref) => {
  return (
    <div className="App" ref={ref}>
      <div className="header">
        <span className="logo">REAs</span>
        <nav>
          <span>Blog</span>
          <span>Categories</span>
          <span>Tags</span>
        </nav>
      </div>
      <div className="hero-section">
        <h1>The Joys of Buying Over Building</h1>
      </div>
      <main>
        <h2 className="features-title">Some features</h2>
        <div className="features">
          <span className="active">House 1</span>
          <span>House 2</span>
          <span>House 3</span>
        </div>
        <p>
          In the grand game of acquiring a new abode, the age-old debate between
          buying an existing house and building a brand-new one continues to
          captivate prospective homeowners. Both options have their merits, but
          let's take a lighthearted stroll through the perks of opting for a
          pre-built dwelling.
        </p>
        <p>
          Then there's the joy of exploring neighborhoods with character and
          history. Buying a house often means settling into an established
          community, complete with charming local spots and friendly neighbors.
          Sure, you might not have personally picked out every detail of your
          home, but there's a unique charm in discovering the stories embedded
          in its walls and the quirks that come with a house that's been lived
          in.
        </p>
        <p>
          In the end, whether you're swiping right on a charming existing home
          or swaying to the rhythm of your own construction symphony, the
          decision between buying and building is a personal one. But hey,
          there's something undeniably delightful about stepping into a house
          and immediately feeling at home – no hard hat required.
        </p>
        <p className="lower">Article generated by ChatGPT</p>
      </main>
    </div>
  );
});
