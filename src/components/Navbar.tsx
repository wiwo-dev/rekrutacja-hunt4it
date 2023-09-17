type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className='flex justify-between py-[38px]'>
      <div className='flex items-center'>
        <button>
          <img src='graphics/menu.svg' alt='menu icon' />
        </button>
      </div>
      <div className='flex gap-3'>
        <button>
          <img src='graphics/icon-heart.png' alt='favorites icon' />
        </button>
        <button>
          <img src='graphics/icon-cart.png' alt='cart icon' />
        </button>
        <button>
          <img src='graphics/icon-user.png' alt='user profile icon' />
        </button>
      </div>
    </nav>
  );
}
