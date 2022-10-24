import { Button } from './components/Button';
import './App.scss';

function App() {
  return (
    <div className='container'>
      <h1>Button Components</h1>
      <h2>Variants</h2>
      <div className='buttons'>
        <div>
          <p>{'<Button/>'}</p>
          <Button />
        </div>
        <div>
          <p>&:hover, &:focus</p>
          <Button forceHover='default-hover' />
        </div>
        <div>
          <p>{'<Button variant="outline" />'}</p>
          <Button variant='outline' />
        </div>
        <div>
          <p>&:hover, &:focus</p>
          <Button variant='outline' forceHover='outline-hover' />
        </div>
        <div>
          <p>{'<Button variant="text" />'}</p>
          <Button variant='text' />
        </div>
        <div>
          <p>&:hover, &:focus</p>
          <Button variant='text' forceHover='text-hover' />
        </div>
      </div>

      <h2>Without box-shadow</h2>
      <div className='buttons'>
        <div>
          <p>{'<Button disableShadow />'}</p>
          <Button disableShadow />
        </div>
      </div>

      <h2>Disabled</h2>
      <div className='buttons'>
        <div>
          <p>{'<Button disabled />'}</p>
          <Button disabled />
        </div>
        <div>
          <p>{'<Button variant="text" disabled/>'}</p>
          <Button variant='text' disabled />
        </div>
      </div>

      <h2>With Icons</h2>
      <div className='buttons'>
        <div>
          <p>{"<Button startIcon='add_shopping_cart' />"}</p>
          <Button startIcon='add_shopping_cart' />
        </div>
        <div>
          <p>{"<Button endIcon='add_shopping_cart' />"}</p>
          <Button endIcon='add_shopping_cart' />
        </div>
        <div>
          <p>{"<Button startIcon='payments' />"}</p>
          <Button startIcon='payments' />
        </div>
        <div>
          <p>{"<Button endIcon='payments' />"}</p>
          <Button endIcon='payments' />
        </div>
        <div>
          <p>{"<Button startIcon='shopping_basket' />"}</p>
          <Button startIcon='shopping_basket' />
        </div>
        <div>
          <p>{"<Button endIcon='shopping_basket' />"}</p>
          <Button endIcon='shopping_basket' />
        </div>
        <div>
          <p>{"<Button startIcon='add_card' />"}</p>
          <Button startIcon='add_card' />
        </div>
        <div>
          <p>{"<Button endIcon='add_card' />"}</p>
          <Button endIcon='add_card' />
        </div>
        <div>
          <p>{"<Button startIcon='remove_shopping_cart' />"}</p>
          <Button startIcon='remove_shopping_cart' />
        </div>
        <div>
          <p>{"<Button endIcon='remove_shopping_cart' />"}</p>
          <Button endIcon='remove_shopping_cart' />
        </div>
      </div>

      <h2>Size variable</h2>
      <div className='buttons-3'>
        <div>
          <p>{"<Button size='sm' />"}</p>
          <Button size='sm' />
        </div>
        <div>
          <p>{"<Button size='md' />"}</p>
          <Button size='md' />
        </div>
        <div>
          <p>{"<Button size='lg' />"}</p>
          <Button size='lg' />
        </div>
      </div>

      <h2>Color Variants</h2>
      <div className='buttons-4'>
        <div>
          <p>{"<Button color='default' />"}</p>
          <Button color='default' />
        </div>
        <div>
          <p>{"<Button color='primary'/>"}</p>
          <Button color='primary'>Primary</Button>
        </div>
        <div>
          <p>{"<Button color='secondary'/>"}</p>
          <Button color='secondary'>Secondary</Button>
        </div>
        <div>
          <p>{"<Button color='danger'/>"}</p>
          <Button color='danger'>Danger</Button>
        </div>
        <div>
          <p>&:hover, &:focus</p>
          <Button color='default' forceHover='default-hover' />
        </div>
        <div>
          <p>&:hover, &:focus</p>
          <Button color='primary' forceHover='primary-hover'>
            Primary
          </Button>
        </div>
        <div>
          <p>&:hover, &:focus</p>
          <Button color='secondary' forceHover='secondary-hover'>
            Secondary
          </Button>
        </div>
        <div>
          <p>&:hover, &:focus</p>
          <Button color='danger' forceHover='danger-hover'>
            Danger
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
