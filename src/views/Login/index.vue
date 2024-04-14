<template>
  <h1 class="text-3xl font-bold underline cursor-pointer">Login</h1>
  <form action="https://extat.evolutto.com.br" method="post">
    <div class="form-group" style="text-align: left">
      <label>Usuário ou e-mail</label>
      <input
        type="text"
        required
        placeholder="Usuário ou e-mail"
        class="form-control"
        id="username"
        name="_username"
      />
    </div>

    <div class="form-group" style="text-align: left">
      <label>Senha</label>
      <input
        type="password"
        required
        placeholder="Senha"
        class="form-control"
        id="password"
        name="_password"
      />
      <input
        type="hidden"
        id="key"
        name="_key"
        value="ee056779-56a7-4a7c-a6f6-4bbcfc654f63"
      />
    </div>

    <button type="submit">Entrar</button>
  </form>
</template>
