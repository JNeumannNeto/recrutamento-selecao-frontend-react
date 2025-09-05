import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Briefcase, Users, TrendingUp } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Layout from '../components/Layout/Layout';

const Home: React.FC = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Encontre sua próxima
              <span className="block text-primary-200">oportunidade</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Conectamos talentos excepcionais com empresas inovadoras. 
              Descubra vagas que combinam com seu perfil e acelere sua carreira.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/jobs"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Ver Vagas Disponíveis
              </Link>
              {!isAuthenticated && (
                <Link
                  to="/register"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
                >
                  Cadastre-se Gratuitamente
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher o RecrutaJob?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nossa plataforma oferece as melhores ferramentas para conectar candidatos e empresas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Busca Inteligente
              </h3>
              <p className="text-gray-600">
                Encontre vagas que realmente combinam com seu perfil usando nossos filtros avançados
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Perfil Completo
              </h3>
              <p className="text-gray-600">
                Crie um perfil detalhado com suas habilidades, experiências e objetivos profissionais
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Acompanhamento
              </h3>
              <p className="text-gray-600">
                Monitore suas candidaturas e receba atualizações sobre o processo seletivo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Vagas Ativas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
              <div className="text-gray-600">Candidatos Registrados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">200+</div>
              <div className="text-gray-600">Empresas Parceiras</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {!isAuthenticated && (
        <section className="py-20 bg-primary-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pronto para começar?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de profissionais que já encontraram suas oportunidades ideais
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Criar Conta Gratuita
              </Link>
              <Link
                to="/jobs"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Explorar Vagas
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Dashboard Quick Access for Authenticated Users */}
      {isAuthenticated && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Bem-vindo de volta, {user?.name}!
              </h2>
              <p className="text-xl text-gray-600">
                Acesse rapidamente suas funcionalidades principais
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                to="/jobs"
                className="card p-6 hover:shadow-lg transition-shadow"
              >
                <Briefcase className="h-8 w-8 text-primary-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Explorar Vagas
                </h3>
                <p className="text-gray-600">
                  Descubra novas oportunidades de trabalho
                </p>
              </Link>

              {user?.role === 'candidate' && (
                <>
                  <Link
                    to="/candidate/profile"
                    className="card p-6 hover:shadow-lg transition-shadow"
                  >
                    <Users className="h-8 w-8 text-primary-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Meu Perfil
                    </h3>
                    <p className="text-gray-600">
                      Gerencie suas informações pessoais
                    </p>
                  </Link>

                  <Link
                    to="/candidate/applications"
                    className="card p-6 hover:shadow-lg transition-shadow"
                  >
                    <TrendingUp className="h-8 w-8 text-primary-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Minhas Candidaturas
                    </h3>
                    <p className="text-gray-600">
                      Acompanhe o status das suas aplicações
                    </p>
                  </Link>
                </>
              )}

              {user?.role === 'admin' && (
                <>
                  <Link
                    to="/admin/jobs"
                    className="card p-6 hover:shadow-lg transition-shadow"
                  >
                    <Briefcase className="h-8 w-8 text-primary-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Gerenciar Vagas
                    </h3>
                    <p className="text-gray-600">
                      Crie e gerencie vagas de trabalho
                    </p>
                  </Link>

                  <Link
                    to="/admin/candidates"
                    className="card p-6 hover:shadow-lg transition-shadow"
                  >
                    <Users className="h-8 w-8 text-primary-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Candidatos
                    </h3>
                    <p className="text-gray-600">
                      Visualize perfis de candidatos
                    </p>
                  </Link>
                </>
              )}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Home;
