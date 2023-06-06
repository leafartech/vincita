import { useEffect } from 'react';

const Form = () => {
  useEffect(() => {
    const showThankYou = (id, message, trackcmp_url, email) => {
      const form = document.getElementById(`form${id}_`);
      const thank_you = form.querySelector('._form-thank-you');
      form.querySelector('._form-content').style.display = 'none';
      thank_you.innerHTML = message;
      thank_you.style.display = 'block';

      // Restante do código relacionado ao objeto visitorObject e trackcmp_url
    };

    const showError = (id, message, html) => {
      const form = document.getElementById(`form${id}_`);
      const err = document.createElement('div');
      const button = form.querySelector('button');
      const old_error = form.querySelector('._form_error');

      if (old_error) {
        old_error.parentNode.removeChild(old_error);
      }

      err.innerHTML = message;
      err.className = '_error-inner _form_error _no_arrow';

      const wrapper = document.createElement('div');
      wrapper.className = '_form-inner';
      wrapper.appendChild(err);

      button.parentNode.insertBefore(wrapper, button);
      document.querySelector('[id^="_form"][id$="_submit"]').disabled = false;

      if (html) {
        const div = document.createElement('div');
        div.className = '_error-html';
        div.innerHTML = html;
        err.appendChild(div);
      }
    };

    const loadScript = (url, callback, isSubmit) => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      script.src = url;

      const head = document.querySelector('head');
      head.appendChild(script);

      if (callback) {
        script.onload = script.onreadystatechange = () => {
          if (!r && (!this.readyState || this.readyState == 'complete')) {
            r = true;
            callback();
          }
        };
      }

      script.onerror = () => {
        if (isSubmit) {
          if (script.src.length > 10000) {
            showError("1", "Desculpe, seu envio falhou. Deixe suas respostas mais curtas e tente novamente.");
          } else {
            showError("1", "Desculpe, seu envio falhou. Tente novamente.");
          }
        }
      };
    };

    const handleFormSubmit = (e) => {
      e.preventDefault();
      // Lógica para lidar com o envio do formulário
    };

    const initializeForm = () => {
      if (window.location.search.search('excludeform') !== -1) return false;
      const form = document.getElementById('form_1');
      form.addEventListener('submit', handleFormSubmit);

      // Restante do código relacionado à inicialização do formulário
    };

    initializeForm();
  }, []);

  return <div id="form_1">
    <form method="POST" action="https://lauromts.activehosted.com/proc.php" id="form_1" class="_form _form_1 _inline-form  " novalidate>
  <input type="hidden" name="u" value="1" />
  <input type="hidden" name="f" value="1" />
  <input type="hidden" name="s" />
  <input type="hidden" name="c" value="0" />
  <input type="hidden" name="m" value="0" />
  <input type="hidden" name="act" value="sub" />
  <input type="hidden" name="v" value="2" />
  <input type="hidden" name="or" value="f36a3a6f8f20d01d71fd12dd9b15aac3" />
  <div class="_form-content">
    <div class="_form_element _x31168353 _full_width _clear" >
      <div class="_form-title">
        Preencha o formulário e dê o primeiro passo rumo ao alívio financeiro
      </div>
    </div>
    <div class="_form_element _x81257348 _full_width _clear" >
      <div class="_html-code">
        <p>
          Seus dados estão completamente seguros e protegidos, mantendo total confidencialidade.
        </p>
      </div>
    </div>
    <div class="_form_element _x88192206 _full_width " >
      <label for="fullname" class="_form-label">
        Nome
      </label>
      <div class="_field-wrapper">
        <input type="text" id="fullname" name="fullname" placeholder="Digite seu nome" />
      </div>
    </div>
    <div class="_form_element _x23776806 _full_width " >
      <label for="email" class="_form-label">
        Email*
      </label>
      <div class="_field-wrapper">
        <input type="text" id="email" name="email" placeholder="Digite seu email" required/>
      </div>
    </div>
    <div class="_form_element _x13180523 _full_width " >
      <label for="phone" class="_form-label">
        Telefone*
      </label>
      <div class="_field-wrapper">
        <input type="text" id="phone" name="phone" placeholder="5561900000000" required/>
      </div>
    </div>
    <div class="_button-wrapper _full_width">
      <button id="_form_1_submit" class="_submit" type="submit">
        Enviar
      </button>
    </div>
    <div class="_clear-element">
    </div>
  </div>
  <div class="_form-thank-you" style={{ display: 'none'}}>
  </div>
</form>
  </div>;
};

export default Form;