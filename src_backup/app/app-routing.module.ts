import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'area-cliente', loadChildren: './area-cliente/area-cliente.module#AreaClientePageModule' },
  { path: 'area-cliente', loadChildren: './area-cliente/area-cliente.module#AreaClientePageModule' },
  { path: 'servicos', loadChildren: './servicos/servicos.module#ServicosPageModule' },
  { path: 'subservicos', loadChildren: './subservicos/subservicos.module#SubservicosPageModule' },
  { path: 'produto', loadChildren: './produto/produto.module#ProdutoPageModule' },
  { path: 'lista-normas', loadChildren: './lista-normas/lista-normas.module#ListaNormasPageModule' },
  { path: 'normas', loadChildren: './normas/normas.module#NormasPageModule' },
  { path: 'ca-lista', loadChildren: './ca-lista/ca-lista.module#CaListaPageModule' },
  { path: 'ca-detalhes', loadChildren: './ca-detalhes/ca-detalhes.module#CaDetalhesPageModule' },
  { path: 'lista-noticias', loadChildren: './lista-noticias/lista-noticias.module#ListaNoticiasPageModule' },
  { path: 'noticia', loadChildren: './noticia/noticia.module#NoticiaPageModule' },
  { path: 'contato', loadChildren: './contato/contato.module#ContatoPageModule' },
  { path: 'lista-databook', loadChildren: './lista-databook/lista-databook.module#ListaDatabookPageModule' },
  { path: 'databook', loadChildren: './databook/databook.module#DatabookPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
