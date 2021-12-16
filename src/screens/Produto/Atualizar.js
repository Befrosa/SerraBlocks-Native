import React, {useState, useEffect} from 'react';
import {
  Text,
  ScrollView,
  TextInput,
  View,
  TouchableHighlight,
} from 'react-native';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import serviceProduto from '../../api/produto';
import serviceCategoria from '../../api/categoria';
import ImagePick from '../../components/ImagePick/ImagePick';
import Styles from './Style';

import {Picker} from '@react-native-community/picker';

const Atualizar = ({route, navigation}) => {
  const {produtoID} = route.params;

  const [url, setUrl] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [produto, setProduto] = useState({});
  const [dataFabricacao, setDataFabricacao] = useState('');
  const [descricao, setDescricao] = useState('');
  const [nome, setNome] = useState('');
  const [qtdEstoque, setQtdEstoque] = useState('');
  const [valor, setValor] = useState('');
  const [idCategoria, setIdCategoria] = useState('');
  const [idProduto, setidProduto] = useState('');

  useEffect(() => {
    serviceCategoria
      .listarTodos()
      .then((response) => {
        setCategorias(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    serviceProduto
      .listarID(produtoID)
      .then((response) => {
        setidProduto(response.data.id);
        setNome(response.data.nome);
        setDescricao(response.data.descricao);
        setDataFabricacao(response.data.dataFabricacao);
        setValor(response.data.valor.toString());
        setQtdEstoque(response.data.qtdEstoque.toString());
        setIdCategoria(response.data.idCategoria);
        setUrl(response.data.fotoLink);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleCadastrar = () => {
    let data = {
      dataFabricacao: '2019-10-01T00:00:00Z',
      idCategoria: idCategoria,
      descricao: descricao,
      nome: nome,
      idFuncionario: 3,
      qtdEstoque: qtdEstoque,
      valor: valor,
      fotoLink: url,
      id: idProduto,
    };

    console.log('PRODUTO', produto);
    console.log('DATA', data);

    serviceProduto
      .atualizar(idProduto, data)
      .then((response) => {
        if (response.status === 201) {
          alert('Produto atualizado com sucesso!');
        }
      })
      .catch((error) => {
        alert('Erro ao atualizar!', error);
        console('Erro ao atualizar!', error);
      });

    console.log(data);
  };

  return (
    <>
      <Header />
      <ScrollView>
        <Text style={Styles.Att}>Atualizar produto</Text>

        <View style={Styles.Container}>
          <View style={Styles.ContainerImage}>
            <ImagePick navigation={navigation} url={setUrl} urlbanco={url} />
          </View>
          <View style={Styles.ContainerButton}>
            <TextInput
              onChangeText={(value) => setNome(value)}
              style={Styles.Input}
              value={nome}
              placeholder="Nome"
            />
          </View>
          <View style={Styles.ContainerButton}>
            <TextInput
              onChangeText={(value) => setDescricao(value)}
              style={Styles.Input}
              value={descricao}
              placeholder="Descricao"
            />
          </View>
          <View style={Styles.ContainerButton}>
            <TextInput
              onChangeText={(value) => setDataFabricacao(value)}
              style={Styles.Input}
              value={dataFabricacao}
              placeholder="Data de fabricação"
            />
          </View>
          <View>
            <TextInput
              onChangeText={(value) => setValor(value)}
              style={Styles.Input}
              value={valor}
              placeholder="R$"
            />
          </View>
          <View>
            <TextInput
              onChangeText={(value) => setQtdEstoque(value)}
              style={Styles.Input}
              value={qtdEstoque}
              placeholder="Quantidade em Estoque"
            />
          </View>
          <View style={Styles.ContainerButton}>
            <Picker
              selectedValue={idCategoria}
              onValueChange={(itemValue) => setIdCategoria(itemValue)}>
              {categorias.map((c) => {
                return <Picker.Item key={c.id} label={c.nome} value={c.id} />;
              })}
            </Picker>
          </View>
          <View style={Styles.ContainerButtonCadastrar}>
            <TouchableHighlight style={Styles.Button} onPress={handleCadastrar}>
              <Text style={Styles.ButtonText}>Cadastrar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </>
  );
};

export default Atualizar;